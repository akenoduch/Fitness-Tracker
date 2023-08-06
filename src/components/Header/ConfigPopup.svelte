<script>
  import { onMount } from 'svelte';
  export let showConfig = false;
  let userResponses = {};
  let waterIntake;
  let editingKey = null;

  onMount(() => {
    userResponses = JSON.parse(localStorage.getItem('userResponses') || '{}');
    waterIntake = localStorage.getItem('waterIntake') || 0;
  });

  const editResponse = (key) => {
    editingKey = key;
  };

  const saveResponse = (event, key) => {
    userResponses[key] = event.target.value;
    localStorage.setItem('userResponses', JSON.stringify(userResponses));
    editingKey = null;
  };

  const editWaterIntake = () => {
    editingKey = 'waterIntake';
  };

  const saveWaterIntake = (event) => {
    waterIntake = event.target.value;
    localStorage.setItem('waterIntake', waterIntake);
    editingKey = null;
  };

  const closeConfig = () => {
    showConfig = false;
  };
</script>

<div class="config-popup" style="display: {showConfig ? 'block' : 'none'};" on:click={closeConfig}>
  <div class="content" on:click|stopPropagation>
    <button class="close-button" on:click={closeConfig}>Fechar</button>
    <h1>Config</h1>
    {#each Object.keys(userResponses) as key}
      <div class="category">
        {#if editingKey === key}
          <input type="text" bind:value={userResponses[key]} on:blur={(event) => saveResponse(event, key)} />
        {:else}
          <span on:click={() => editResponse(key)}>{key}: {userResponses[key]}</span>
        {/if}
      </div>
    {/each}
  </div>
  <div class="water-intake" on:click|stopPropagation>
    <h2>Water Intake</h2>
    {#if editingKey === 'waterIntake'}
      <input type="number" bind:value={waterIntake} on:blur={saveWaterIntake} />
    {:else}
      <span on:click={editWaterIntake}>{waterIntake} ml</span>
    {/if}
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
    cursor: pointer;
  }
  .category {
    margin: 10px 0;
    cursor: pointer;
  }
  .water-intake {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    background-color: white;
    padding: 20px;
    box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.1);
  }
  .water-intake h2 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: #7700ca;
  }
  .water-intake span {
    font-size: 24px; /* Tamanho de fonte maior */
    color: black; /* Estilização consistente com outras categorias */
    cursor: pointer;
  }
</style>
