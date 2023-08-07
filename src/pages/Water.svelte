<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import Header from "../components/Header/Header.svelte";
  import WaterDrop from "$components/WaterDrop/WaterDrop.svelte";
  import AddButton from "$components/AddButton/AddButton.svelte";

  let offset = 0; // Start with an empty water drop
  let currentWaterConsumed = 0; // Start with zero water consumed
  let showInput = false;
  let waterIntake = 0;

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

  $: {
    waterIntake = Number(localStorage.getItem("waterIntake") || 0);
    offset = calculateOffset(currentWaterConsumed);
  }
</script>

<Header showHeader={true} />

<div class="centered-content">
  <div class="current-water-consumed">
    {currentWaterConsumed} ml
  </div>
  <div class="water-intake-card">
    Water Intake Goal: <span>{waterIntake} ml</span>
  </div>

  <WaterDrop
    {waterIntake}
    {currentWaterConsumed}
  />
  <AddButton
    bind:offset
    {showInput}
    on:waterAdded={(e) => {
      currentWaterConsumed += e.detail; // Add the water amount entered by the user
      offset = calculateOffset(currentWaterConsumed); // Recalculate the offset
    }}
  />
</div>

<Footer />

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
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
    color: #7700ca;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
