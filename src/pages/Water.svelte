<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import Header from "../components/Header/Header.svelte";
  import WaterDrop from "$components/Water/WaterDrop.svelte";
  import AddButton from "$components/Water/AddButton.svelte";
  import CongratulationsPopup from "$components/Water/CongratulationsPopup.svelte";

  function getToday() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  function getWaterDataForToday() {
    let waterDataArray =
      JSON.parse(localStorage.getItem("waterDataArray")) || [];
    return (
      waterDataArray.find((item) => item.date === getToday()) || {
        currentWaterConsumed: 0,
      }
    );
  }

  let offset = 0;
  let waterData = JSON.parse(localStorage.getItem("waterData")) || {};
  let { currentWaterConsumed } = getWaterDataForToday();
  let showInput = false;
  let waterIntake = 0;
  let showCongratulations = false;

  $: remainingWaterIntake = waterIntake - currentWaterConsumed;
  $: showCongratulations = remainingWaterIntake <= 0;
  $: textColor = offset < 58 ? "#7700ca" : "#ffffff";

  onMount(() => {
    waterIntake = Number(localStorage.getItem("waterIntake") || 0);
    offset = calculateOffset(currentWaterConsumed);
    window.addEventListener("waterIntakeChanged", updateWaterIntake);
  });

  function calculateOffset(consumed) {
    if (waterIntake === 0) return 0;
    return (consumed / waterIntake) * 100;
  }

  function updateWaterIntake() {
    waterIntake = Number(localStorage.getItem("waterIntake") || 0);
  }

  function updateWaterData(date, consumed) {
    let waterDataArray =
      JSON.parse(localStorage.getItem("waterDataArray")) || [];
    const existingData = waterDataArray.find((item) => item.date === date);
    if (existingData) {
      existingData.currentWaterConsumed = consumed;
    } else {
      waterDataArray.push({ date, currentWaterConsumed: consumed });
    }
    localStorage.setItem("waterDataArray", JSON.stringify(waterDataArray));
  }

  function handleWaterAdded(e) {
    currentWaterConsumed += parseFloat(e.detail);
    offset = calculateOffset(currentWaterConsumed);
    updateWaterData(getToday(), currentWaterConsumed);
  }

  function closeCongratulations() {
    showCongratulations = false;
  }
</script>

<Header showHeader={true} />

<div class="centered-content">
  <div
    class="current-water-consumed"
    style="color: {textColor}"
  >
    {currentWaterConsumed} ml
  </div>
  <div class="water-intake-card">
    Water Intake Goal: <span>{waterIntake} ml</span>
  </div>
  <div class="remaining-water-intake">
    Remaining Water Intake: <span>{remainingWaterIntake} ml</span>
  </div>

  <WaterDrop
    {waterIntake}
    {currentWaterConsumed}
  />
  <AddButton
    bind:offset
    {showInput}
    on:waterAdded={handleWaterAdded}
  />
</div>

<CongratulationsPopup
  show={showCongratulations}
  onClose={closeCongratulations}
/>

<Footer />

<style lang="scss">
  .centered-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 12vh * 2.8);
  }
  .water-intake-card {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 80%;
  }
  .water-intake-card span {
    color: #7700ca;
    font-size: 22px;
  }
  .current-water-consumed {
    font-size: 28px;
    font-weight: bold;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .remaining-water-intake {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 20px;
    height: fit-content;
    position: fixed;
    top: 30vh;
    left: 0;
    font-size: 15px;
  }
  .remaining-water-intake span {
    color: #7700ca;
    font-size: 19px;
  }
</style>
