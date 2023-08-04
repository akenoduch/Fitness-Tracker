<!-- Home.svelte -->
<script lang="ts">
  import Footer from "$components/Footer/Footer.svelte";
  import Header from "$components/Header/Header.svelte";
</script>

<style lang="scss">
  article {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Define a altura para que o conteúdo ocupe toda a tela */
  }

  section {
    flex: 1; /* Ocupa o espaço disponível entre o header e o footer */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; /* Distribui os cards uniformemente ao longo da seção */
    align-items: center; /* Centraliza os cards horizontalmente */
    gap: 20px; /* Espaçamento entre os cards */
    padding-bottom: 10vh;
  }

  overview-water {
    width: 100%;
    height: 20vh;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #7700ca 5px solid;
  }

  overview-break {
    width: 100%;
    height: 20vh;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #7700ca 5px solid;
  }
</style>

<article>
  <Header
  showHeader={true}
  userName="Shay Doe"
  ></Header> <!-- Defina showHeader como true para exibir o Header -->
  <section>
    <!-- Conteúdo da overview aqui -->
    <overview-water>
      <h3>Water</h3>
      <p>2.5L</p>
    </overview-water>
    <overview-break>
      <h3>Break</h3>
      <p>2.5L</p>
    </overview-break>
  </section>
</article>

<Footer></Footer>
