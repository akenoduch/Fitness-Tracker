<script>
  export let questions = [];
  let currentQuestionIndex = 0;
  let answers = {};
  let showWelcome = true;
  let showThankYou = false;
  let showPopup = true;
  let waterIntake = 0;

  const saveAnswer = (key, value) => {
    answers[key] = value;
  };

  const nextQuestion = () => {
    saveAnswer(questions[currentQuestionIndex].id, answers[questions[currentQuestionIndex].id]);
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
    } else {
      calculateWaterIntake();
      localStorage.setItem('userResponses', JSON.stringify(answers));
      localStorage.setItem('waterIntake', waterIntake.toFixed(2)); // Salvando o resultado no localStorage
      showThankYou = true;
    }
  };

  const closePopup = () => {
    showPopup = false;
  };

  const startQuestions = () => {
    showWelcome = false;
  };

  const calculateWaterIntake = () => {
    const weight = parseFloat(answers.weight);
    const activity = answers.activity;
    const height = parseFloat(answers.height);
    const gender = answers.gender;

    let activityFactor = 0;
    switch (activity) {
      case 'sedentary':
        activityFactor = 30;
        break;
      case 'lightlyActive':
        activityFactor = 35;
        break;
      case 'moderatelyActive':
        activityFactor = 40;
        break;
      case 'veryActive':
        activityFactor = 45;
        break;
      case 'extremelyActive':
        activityFactor = 50;
        break;
      default:
        activityFactor = 30;
    }

    const heightFactor = height * 0.3;
    const genderFactor = (gender === 'male') ? 5 : -161;

    waterIntake = (weight * activityFactor) + heightFactor + genderFactor;
  };
</script>

{#if showPopup} <!-- Controla a exibição da popup -->
  <div class="popup">
    {#if showWelcome}
      <div>
        <h1>Boas-vindas!</h1>
        <button on:click={startQuestions}>Começar</button>
      </div>
    {:else if showThankYou}
      <div>
        <h1>Obrigado</h1>
        <p>Water: {waterIntake.toFixed(2)} ml</p> <!-- Exibindo o valor calculado -->
        <button on:click={closePopup}>Fechar</button> <!-- Botão para fechar a popup -->
      </div>
    {:else}
      <div>
        <label for={questions[currentQuestionIndex].id}>{questions[currentQuestionIndex].label}</label>
        {#if questions[currentQuestionIndex].type === 'text'}
          <input type="text" id={questions[currentQuestionIndex].id} bind:value={answers[questions[currentQuestionIndex].id]} />
        {:else if questions[currentQuestionIndex].type === 'number'}
          <input type="number" id={questions[currentQuestionIndex].id} bind:value={answers[questions[currentQuestionIndex].id]} />
        {:else if questions[currentQuestionIndex].type === 'select'}
          <select id={questions[currentQuestionIndex].id} bind:value={answers[questions[currentQuestionIndex].id]}>
            {#each questions[currentQuestionIndex].options as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        {/if}
        <button on:click={nextQuestion}>Próximo</button>
      </div>
    {/if}
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow-y: auto;
  }

  .popup > div {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
  }
</style>
