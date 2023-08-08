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
      label: "Body Weight (kg):",
      id: "weight",
      type: "number",
      required: true,
    },
    {
      label: "Nível de atividade física:",
      id: "activity",
      type: "select",
      options: [
        { value: "sedentary", label: "Sedentary (little or no exercise)" },
        {
          value: "lightlyActive",
          label: "Lightly active (light exercise or sports 1-3 days per week)",
        },
        {
          value: "moderatelyActive",
          label:
            "Moderately active (moderate exercise or sports 3-5 days per week)",
        },
        {
          value: "veryActive",
          label: "Very active (intense exercise or sports 6-7 days per week)",
        },
        {
          value: "extremelyActive",
          label:
            "Extremely active (very intense exercise and heavy physical work or exercise twice a day)",
        },
      ],
      required: true,
    },
    {
      label: "Height (cm):",
      id: "height",
      type: "number",
      required: true,
    },
    {
      label: "Gender:",
      id: "gender",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
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
  @font-face {
    font-family: "SF Pro Display";
    src: url("/fonts/SF-Pro-Display-Regular.otf");
  }
  * {
    font-family: "SF Pro Display";
  }
</style>
