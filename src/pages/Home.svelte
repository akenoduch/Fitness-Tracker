<!-- Home.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "$components/Footer/Footer.svelte";
  import Header from "$components/Header/Header.svelte";

  let userName = "";

  onMount(() => {
    const userResponses = JSON.parse(localStorage.getItem("userResponses"));
    if (userResponses && userResponses.UserName) {
      userName = userResponses.UserName;
    }
  });

</script>

<style lang="scss">
  section {
    flex: 1; /* Ocupa todo o espaço disponível */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; /* Distribui os cards com espaçamento igual */
    align-items: center; /* Centraliza X */
    gap: 20px; /* Espaçamento entre os cards */
    padding-bottom: 10vh;
    height: calc(100vh - 12vh * 2.8); /* centraliza altura */
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


  <Header
  showHeader={true}
  {userName}
  ></Header>
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


<Footer></Footer>
