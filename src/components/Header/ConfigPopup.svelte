<script>
  export let showConfig = false;
  let userResponses = {};
  let waterIntake;
  let editingKey = null;
  let tempValue;

  $: if (showConfig) {
    const questionIds = ["UserName", "weight", "activity", "height", "gender"];
    questionIds.forEach((id) => {
      const value = localStorage.getItem(id);
      userResponses[id] =
        id === "weight" || id === "height" ? parseFloat(value) : value;
    });
    waterIntake = parseFloat(localStorage.getItem("waterIntake"));
  }

  const editResponse = (key) => {
    editingKey = key;
    tempValue = userResponses[key];
  };

  const saveResponse = (key) => {
    userResponses[key] = tempValue;
    localStorage.setItem(
      key,
      key === "weight" || key === "height" ? tempValue.toString() : tempValue
    );
    editingKey = null;
    calculateWaterIntake();
  };

  const editWaterIntake = () => {
    editingKey = "waterIntake";
    tempValue = waterIntake;
  };

  const saveWaterIntake = () => {
    waterIntake = tempValue;
    localStorage.setItem("waterIntake", waterIntake);
    editingKey = null;
  };

  const closeConfig = () => {
    showConfig = false;
  };

  const activityOptions = [
    "sedentary",
    "lightlyActive",
    "moderatelyActive",
    "veryActive",
    "extremelyActive",
  ];

  const genderOptions = ["male", "female"];

  // Função para calcular o waterIntake com base nas respostas do usuário
  function calculateWaterIntake() {
    const weight = parseFloat(userResponses.weight);
    const activity = userResponses.activity;
    const height = parseFloat(userResponses.height);
    const gender = userResponses.gender;

    let activityFactor = 0;
    switch (activity) {
      case "sedentary":
        activityFactor = 30;
        break;
      case "lightlyActive":
        activityFactor = 35;
        break;
      case "moderatelyActive":
        activityFactor = 40;
        break;
      case "veryActive":
        activityFactor = 45;
        break;
      case "extremelyActive":
        activityFactor = 50;
        break;
      default:
        activityFactor = 30;
    }

    const heightFactor = height * 0.3;
    const genderFactor = gender === "male" ? 5 : -161;

    waterIntake = weight * activityFactor + heightFactor + genderFactor;
    localStorage.setItem("waterIntake", waterIntake.toString());
    window.dispatchEvent(new CustomEvent("waterIntakeChanged"));
  }
</script>

<div
  class="config-popup"
  style="display: {showConfig ? 'block' : 'none'};"
  on:click={closeConfig}
>
  <div
    class="content"
    on:click|stopPropagation
  >
    <h1>Settings</h1>
    <button
      class="close-button"
      on:click={closeConfig}>X</button
    >
    <label>User Name:</label>
    {#if editingKey === "UserName"}
      <input
        type="text"
        bind:value={tempValue}
      />
      <button on:click={() => saveResponse("UserName")}>Salvar</button>
    {:else}
      <span on:click={() => editResponse("UserName")}
        >{userResponses.UserName}</span
      >
    {/if}
    <div class="field">
      <label>Height (cm):</label>
      {#if editingKey === "height"}
        <input
          type="number"
          bind:value={tempValue}
        />
        <button on:click={() => saveResponse("height")}>Salvar</button>
      {:else}
        <span on:click={() => editResponse("height")}
          >{userResponses.height}</span
        >
      {/if}
    </div>
    <div class="field">
      <label>Weight (kg):</label>
      {#if editingKey === "weight"}
        <input
          type="number"
          bind:value={tempValue}
        />
        <button on:click={() => saveResponse("weight")}>Salvar</button>
      {:else}
        <span on:click={() => editResponse("weight")}
          >{userResponses.weight}</span
        >
      {/if}
    </div>
    <div class="field">
      <label>Activity Level:</label>
      {#if editingKey === "activity"}
        <select bind:value={tempValue}>
          {#each activityOptions as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
        <button on:click={() => saveResponse("activity")}>Salvar</button>
      {:else}
        <span on:click={() => editResponse("activity")}
          >{userResponses.activity}</span
        >
      {/if}
    </div>
    <div class="field">
      <label>Gender:</label>
      {#if editingKey === "gender"}
        <select bind:value={tempValue}>
          {#each genderOptions as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
        <button on:click={() => saveResponse("gender")}>Salvar</button>
      {:else}
        <span on:click={() => editResponse("gender")}
          >{userResponses.gender}</span
        >
      {/if}
    </div>
    <div class="water-intake">
      <label>Water Intake:</label>
      {#if editingKey === "waterIntake"}
        <input
          type="number"
          bind:value={tempValue}
        />
        <button on:click={saveWaterIntake}>Salvar</button>
      {:else}
        <span on:click={editWaterIntake}>{waterIntake}</span>
      {/if}
    </div>
  </div>
</div>

<style>
  .config-popup {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 999999;
  }
  .content {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: white;
    overflow: auto;
    padding: 20px;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .water-intake {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 50%;
    background-color: white;
    padding: 20px;
    box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.1);
  }
  .water-intake label {
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: #7700ca;
  }
  .water-intake span {
    font-size: 24px;
    color: black;
    cursor: pointer;
  }
  .field {
    margin-bottom: 15px;
  }
  .field span {
    cursor: pointer;
  }
</style>
