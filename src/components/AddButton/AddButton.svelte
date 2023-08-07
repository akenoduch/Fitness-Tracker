<!-- AddButton.svelte -->
<script>
  export let offset;
  export let showInput = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let waterAmount = 0;

  function toggleInput() {
    showInput = !showInput;
    if (!showInput) {
      dispatch("waterAdded", waterAmount);
      waterAmount = 0;
    }
  }
</script>

<!-- lembrar de não permitir valores negativos no input -->
<div>
  {#if showInput}
    <div class="input-container">
      <input
        type="number"
        bind:value={waterAmount}
        placeholder="Amount in ml"
      />
      <button on:click={toggleInput}>Confirm</button>
    </div>
  {/if}
  {#if !showInput}
    <div
      class="add-button"
      on:click={toggleInput}
    >
      +
    </div>
  {/if}
</div>

<style lang="scss">
  .add-button {
    height: 80px;
    width: 80px;
    background-image: linear-gradient(180deg, #7700ca 0%, #f7e9ff 100%);
    border-radius: 50%;
    margin-bottom: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bolder;
    color: white;
  }
  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .input-container input {
    margin-right: 10px;
  }
</style>
