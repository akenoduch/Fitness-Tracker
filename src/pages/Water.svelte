<!-- Water.svelte -->
<script>
  import { onMount } from 'svelte';

  import Footer from '../components/Footer/Footer.svelte';
  import Header from '../components/Header/Header.svelte';
  import WaterDrop from '$components/WaterDrop/WaterDrop.svelte';
  import AddButton from '$components/AddButton/AddButton.svelte';

  let offset = 0;
  let showInput = false;
  let showConfirmation = false;

  onMount(() => {
    // Carregar o valor waterIntake do localStorage e convertê-lo para um número
    const waterIntake = Number(localStorage.getItem('waterIntake') || 0);

    // Você pode ajustar o valor de waterIntake conforme necessário para ajustar ao intervalo de 0 a 100
    offset = waterIntake;

    const addButton = document.querySelector('.add-button');
    addButton.addEventListener('click', toggleInput);
  });

  function toggleInput() {
    showInput = !showInput;
    if (showInput) {
      showConfirmation = true;
    } else {
      showConfirmation = false;
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .centered-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 12vh * 2.8); /* centralizar altura */
  }
</style>

<Header showHeader={true} />

<div class="centered-content">
  <WaterDrop {offset} />
  <AddButton bind:offset={offset} {showInput} {showConfirmation} />
</div>

<Footer />
