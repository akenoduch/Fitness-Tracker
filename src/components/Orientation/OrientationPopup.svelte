<!-- OrientationPopup.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  let isHorizontal = false;

  const handleOrientationChange = () => {
    isHorizontal = window.orientation === 90 || window.orientation === -90;
  };

  onMount(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
  });

  onDestroy(() => {
    window.removeEventListener('orientationchange', handleOrientationChange);
  });
</script>

{#if isHorizontal}
<div class="popup-overlay">
  <div class="popup">
    <p>Please revert to vertical orientation!</p>
  </div>
</div>
{/if}

<style>
  /* Styling for the popup overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 9999;
  }

  /* Styling for the popup */
  .popup {
    /* Customize the popup appearance */
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
