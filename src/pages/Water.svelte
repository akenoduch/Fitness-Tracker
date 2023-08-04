<!-- Water.svelte -->
<script>
  import Footer from '../components/Footer/Footer.svelte';
  import Header from '../components/Header/Header.svelte';
</script>

<style lang="scss">
  *{
    background-color: grey;
  }
  /* Estilo para centralizar o texto */
  .centered-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 12vh * 2.8); /* centralizar altura */
    font-size: 24px;
    font-weight: bold;
  }
</style>

<Header
showHeader={true}>
</Header>

<div class="centered-content">
  <!-- Conteúdo centralizado -->
  Oi
</div>

<Footer></Footer>
