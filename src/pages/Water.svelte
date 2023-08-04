<!-- Water.svelte -->
<script>
  import Footer from '../components/Footer/Footer.svelte';
</script>

<style lang="scss">
  * {
    background-color: black;
  }
  /* Estilo para centralizar o texto */
  .centered-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 12vh); /* Subtrai a altura do footer para garantir que o conteúdo esteja no centro da tela */
    font-size: 24px;
    font-weight: bold;
  }

  /* Estilos adicionais para a página, se necessário */
</style>

<div class="centered-content">
  <!-- Conteúdo centralizado -->
  Oi
</div>

<Footer></Footer>
