<!-- Header.svelte -->
<script lang="ts">
  export let showHeader = false;
  export let userName = "";
  // export let pageType = "";

  // Função para obter a data atual formatada com o mês por extenso
  function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('pt-BR', options);
  }

    // Função para obter a parte relevante da URL após o hash
    function getCurrentPageType() {
    return window.location.hash;
  }

  // Inicializar a prop currentDate com a data formatada
  export let currentDate = getCurrentDate();

  // Inicializar a prop pageType com a parte relevante da URL após o hash
  export let pageType = getCurrentPageType();

</script>

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
    padding-left: 20px; /* Espaçamento à esquerda */
    color: #fff; /* Cor do texto */
    font-size: 18px;
  }
  .date {
    font-size: 1em; /* 80% do font-size do user-info (18px * 0.8) */
    color: #7700ca;
    font-weight: bold;
  }

  .user-name {
    font-weight: bold;
    font-size: 1.8em; /* 150% do font-size do user-info (18px * 1.5) */
    margin-bottom: 4px; /* Espaçamento entre o nome do usuário e a data */
    color: black;
  }

  .spacer {
    height: 20vh; /* Defina a mesma altura do header */
  }
</style>


{#if showHeader}
  <div class="header">
    <div class="user-info">
      {#if pageType === '#/home'} <!-- Home -->
        <div class="user-name">Hello, {userName}</div>
      {:else if pageType === '#/water'} <!-- Water -->
        <div class="user-name">Daily Water</div>
      {:else if pageType === '#/break'} <!-- Break -->
        <div class="user-name">Take a Break</div>
      {:else} <!-- Outras páginas -->
        <div class="user-name">Hello, {userName}</div>
      {/if}
      <div class="date">{currentDate}</div>
    </div>
  </div>
  <div class="spacer"></div>
{/if}
