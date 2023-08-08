<script>
  export let show = false;
  export let onClose = () => {};
</script>

{#if show}
  <div class="congratulations-popup">
    <div class="content">
      <h1>Congratulations!</h1>
      <p>You have reached your daily water intake goal!</p>
      <button on:click={onClose}>Close</button>
    </div>
  </div>
{/if}

<style>
  .congratulations-popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .congratulations-popup .content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
</style>
