<!-- Header.svelte -->
<script lang="ts">
  import ConfigPopup from "./ConfigPopup.svelte";
  export let showHeader = false;

  let userName = JSON.parse(localStorage.getItem("UserName") || '"Guest"');

  // Função para obter a parte relevante da URL após o hash
  function getCurrentPageType() {
    return window.location.hash;
  }

  function getCurrentDate() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString("pt-BR", options);
  }

  export let currentDate = getCurrentDate();

  // Inicializar a prop pageType com a parte relevante da URL após o hash
  export let pageType = getCurrentPageType();

  let showConfig = false;
  let categories = Object.entries(localStorage).map(([key, value]) => ({
    key,
    value,
  }));

  const toggleConfigPopup = () => {
    showConfig = !showConfig;
  };
</script>

{#if showHeader}
  <div class="header">
    <div class="user-info">
      {#if pageType === "#/home"}
        <div class="user-name">Hello, {userName}</div>
      {:else if pageType === "#/water"}
        <div class="user-name">Daily Water</div>
      {:else if pageType === "#/break"}
        <div class="user-name">Take a Break</div>
      {:else}
        <div class="user-name">Hello, {userName}</div>
      {/if}
      <div class="date">{currentDate}</div>
    </div>
    <button
      on:click={toggleConfigPopup}
      class="menu-button">Menu</button
    >
  </div>
  <div class="spacer" />
  <ConfigPopup
    {categories}
    {showConfig}
  />
{/if}

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-info {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    color: #fff;
    font-size: 18px;
  }
  .date {
    font-size: 1em;
    color: #7700ca;
    font-weight: bold;
  }
  .user-name {
    font-weight: bold;
    font-size: 1.8em;
    margin-bottom: 4px;
    color: black;
  }
  .spacer {
    height: 20vh;
  }
  .menu-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background: #7700ca;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border: none;
  }
</style>
