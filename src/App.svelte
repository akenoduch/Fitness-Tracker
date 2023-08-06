<!-- App.svelte -->
<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Footer from "$components/Footer/Footer.svelte";
  import OrientationPopup from "$components/Orientation/OrientationPopup.svelte";
  import PopupForm from "$components/InitialPopup/PopupForm.svelte";

  const questions = [
    {
      label: "What's your name?",
      id: "UserName",
      type: "text",
      required: true,
    },
    {
      label: "Peso corporal (kg):",
      id: "weight",
      type: "number",
      required: true,
    },
    {
      label: "Nível de atividade física:",
      id: "activity",
      type: "select",
      options: [
        { value: "sedentary", label: "Sedentário (pouco ou nenhum exercício)" },
        {
          value: "lightlyActive",
          label:
            "Levemente ativo (exercício leve ou esportes 1-3 dias por semana)",
        },
        {
          value: "moderatelyActive",
          label:
            "Moderadamente ativo (exercício moderado ou esportes 3-5 dias por semana)",
        },
        {
          value: "veryActive",
          label:
            "Muito ativo (exercício intenso ou esportes 6-7 dias por semana)",
        },
        {
          value: "extremelyActive",
          label:
            "Extremamente ativo (exercício muito intenso e trabalho físico pesado ou exercício duas vezes por dia)",
        },
      ],
      required: true,
    },
    {
      label: "Altura (cm):",
      id: "height",
      type: "number",
      required: true,
    },
    {
      label: "Gênero:",
      id: "gender",
      type: "select",
      options: [
        { value: "male", label: "Masculino" },
        { value: "female", label: "Feminino" },
      ],
      required: true,
    },
  ];
</script>

<PopupForm {questions} />
<div class="app-container">
  <Router {routes} />
</div>
<Footer />
<OrientationPopup />

<style>
</style>
