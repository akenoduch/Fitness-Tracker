<script>
  import Footer from "../components/Footer/Footer.svelte";
  import Header from "../components/Header/Header.svelte";

  let today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
  let storedData = JSON.parse(localStorage.getItem("breaks")) || {
    date: today,
    breaks: [],
  };
  if (storedData.date !== today) storedData = { date: today, breaks: [] }; // Reset if not today's data

  let breaks = storedData.breaks;
  let addingBreak = false;
  let breakText = "";
  let breakDuration = null;
  const durations = [5, 10, 15, 20, 25, 30, 40, 50, 60];

  function startAddingBreak() {
    addingBreak = true;
  }

  function saveBreak() {
    let backgroundImage = "src/assets/coffee.jpg";
    if (breakText.toLowerCase().includes("stretch")) {
      backgroundImage = "src/assets/stretch.jpg";
    } else if (!breakText.toLowerCase().includes("coffee")) {
      backgroundImage =
        Math.random() < 1 ? "src/assets/coffee.jpg" : "src/assets/stretch.jpg";
    }
    breaks = [
      ...breaks,
      {
        id: breaks.length,
        text: breakText,
        duration: Number(breakDuration),
        image: backgroundImage,
      },
    ];
    localStorage.setItem(
      "breaks",
      JSON.stringify({ date: today, breaks: breaks })
    ); // Save with date
    addingBreak = false;
    breakText = "";
    breakDuration = null;
  }

  function deleteBreak(id) {
    breaks = breaks.filter((breakItem) => breakItem.id !== id);
    localStorage.setItem(
      "breaks",
      JSON.stringify({ date: today, breaks: breaks })
    ); // Save with date
  }
</script>

<Header showHeader={true} />

<div class="centered-content">
  <div class="view-port">
    {#each breaks as breakItem (breakItem.id)}
      <div
        class="break-card"
        style="background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url({breakItem.image});"
      >
        Break {breakItem.id + 1}: {breakItem.text} ({breakItem.duration} minutes)
        <button
          class="delete-button"
          on:click={() => deleteBreak(breakItem.id)}>X</button
        >
      </div>
    {/each}
  </div>
  {#if addingBreak}
    <div class="add-break-form">
      <input
        type="text"
        bind:value={breakText}
        placeholder="Break description"
      />
      <select bind:value={breakDuration}>
        {#each durations as duration}
          <option value={duration}>{duration} minutes</option>
        {/each}
      </select>
      <button on:click={saveBreak}>Save</button>
    </div>
  {/if}
  <div
    class="add-card"
    on:click={startAddingBreak}
  >
    <span>New Break</span>
  </div>
</div>

<Footer />

<style lang="scss">
  .centered-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 12vh * 2.8);
    font-size: 24px;
    font-weight: bold;
  }
  .view-port {
    width: 100%;
    height: calc(100vh - 12vh * 2.9);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border: #7700ca 4px solid;
  }
  .add-card {
    width: 90px;
    height: 90px;
    position: absolute;
    bottom: 12vh;
    right: 1vw;
    border-radius: 50%;
    text-align: center;
    background-image: linear-gradient(180deg, #7700ca 0%, #f7e9ff 100%);
  }
  .add-card span {
    position: relative;
    justify-content: center;
    top: 10px;
    color: white;
  }
  .break-card {
    width: 100%;
    height: 20%;
    position: relative;
    margin-bottom: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .delete-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #f4433600;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: bold;
    border: none;
  }
  .add-break-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #7700ca 0%, #f7e9ff 100%);
    padding: 20px;
    border: 1px solid #ccc;
    z-index: 1000;
  }
</style>
