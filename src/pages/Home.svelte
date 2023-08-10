<script>
  import Chart from "chart.js/auto";
  import Header from "../components/Header/Header.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import { onMount } from "svelte";

  function getToday() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  function getChartData() {
    const waterDataArray =
      JSON.parse(localStorage.getItem("waterDataArray")) || [];
    const breaksDataArray =
      JSON.parse(localStorage.getItem("breaksDataArray")) || [];

    const waterLabels = waterDataArray.map((item) => item.date);
    const waterValues = waterDataArray.map((item) => item.currentWaterConsumed);

    const breakLabels = breaksDataArray.map((item) => item.date);
    const breakValues = breaksDataArray.map((item) => item.breaks.length);

    return {
      waterLabels,
      waterValues,
      breakLabels,
      breakValues,
    };
  }

  onMount(() => {
    const { waterLabels, waterValues, breakLabels, breakValues } =
      getChartData();

    const waterConfig = {
      type: "bar",
      data: {
        labels: waterLabels,
        datasets: [
          {
            label: "Water Intake",
            data: waterValues,
            backgroundColor: "blue",
          },
        ],
      },
      options: {
        scales: {
          x: { beginAtZero: true, type: "category" },
          y: { beginAtZero: true },
        },
      },
    };

    const breakConfig = {
      type: "bar",
      data: {
        labels: breakLabels,
        datasets: [
          {
            label: "Breaks",
            data: breakValues,
            backgroundColor: "red",
          },
        ],
      },
      options: {
        scales: {
          x: { beginAtZero: true, type: "category" },
          y: { beginAtZero: true },
        },
      },
    };

    const waterCtx = document.getElementById("waterChart").getContext("2d");
    const breakCtx = document.getElementById("breakChart").getContext("2d");
    new Chart(waterCtx, waterConfig);
    new Chart(breakCtx, breakConfig);
  });
</script>

<Header showHeader={true} />

<div class="centered-content">
  <h1>Overview</h1>
  <div class="chart-container">
    <h2>Water Intake</h2>
    <canvas id="waterChart" />
  </div>
  <div class="chart-container">
    <h2>Break Cards</h2>
    <canvas id="breakChart" />
  </div>
</div>

<Footer />

<style>
  .centered-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 12vh * 2.8);
    overflow: auto;
  }
  .chart-container {
    width: 80%;
    margin: 10px;
    border: 3px solid #7700ca;
    border-radius: 10px;
    padding: 5px;
  }
  h1 {
    margin: 0;
    color: #7700ca;
  }
</style>
