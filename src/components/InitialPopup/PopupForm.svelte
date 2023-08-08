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

  let UserNameStorage = localStorage.getItem("UserName");

  const nextQuestion = () => {
    const currentQuestionId = questions[currentQuestionIndex].id;
    const answer = answers[currentQuestionId];
    saveAnswer(currentQuestionId, answer);

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
    } else {
      calculateWaterIntake();
      for (const [key, value] of Object.entries(answers)) {
        localStorage.setItem(key, JSON.stringify(value));
      }
      localStorage.setItem("waterIntake", waterIntake.toFixed(2));
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
      case "sedentary":
        activityFactor = 30;
        break;
      case "lightlyActive":
        activityFactor = 35;
        break;
      case "moderatelyActive":
        activityFactor = 40;
        break;
      case "veryActive":
        activityFactor = 45;
        break;
      case "extremelyActive":
        activityFactor = 50;
        break;
      default:
        activityFactor = 30;
    }

    const heightFactor = height * 0.3;
    const genderFactor = gender === "male" ? 5 : -161;

    waterIntake = Math.round(
      weight * activityFactor + heightFactor + genderFactor
    );
  };
</script>

{#if showPopup && !UserNameStorage}
  <div class="popup">
    {#if showWelcome}
      <div>
        <h1>Welcome!</h1>
        <button on:click={startQuestions}>Start</button>
      </div>
    {:else if showThankYou}
      <div>
        <h1>Thank you!</h1>
        <p>Your daily Water Intake is: {waterIntake.toFixed(2)} ml</p>
        <button on:click={closePopup}>Close</button>
      </div>
    {:else}
      <div>
        <label for={questions[currentQuestionIndex].id}
          >{questions[currentQuestionIndex].label}</label
        >
        {#if questions[currentQuestionIndex].type === "text"}
          <input
            type="text"
            id={questions[currentQuestionIndex].id}
            bind:value={answers[questions[currentQuestionIndex].id]}
          />
        {:else if questions[currentQuestionIndex].type === "number"}
          <input
            type="number"
            id={questions[currentQuestionIndex].id}
            bind:value={answers[questions[currentQuestionIndex].id]}
          />
        {:else if questions[currentQuestionIndex].type === "select"}
          <select
            id={questions[currentQuestionIndex].id}
            bind:value={answers[questions[currentQuestionIndex].id]}
          >
            {#each questions[currentQuestionIndex].options as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        {/if}
        <button on:click={nextQuestion}>Next</button>
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
