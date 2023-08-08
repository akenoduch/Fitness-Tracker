<script>
  export let currentWaterConsumed = 0;
  export let waterIntake = 0;

  $: offset =
    waterIntake === 0 ? 100 : 100 - (currentWaterConsumed / waterIntake) * 100;
</script>

<svg
  class="water-drop"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 30 42"
>
  <defs>
    <linearGradient
      id="grad"
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop
        offset="0%"
        style="stop-color:#407ad1; stop-opacity:0"
      />
      <stop
        offset={offset + "%"}
        style="stop-color:#407ad1; stop-opacity:0"
      />
      <stop
        offset={offset + "%"}
        style="stop-color:#407ad1; stop-opacity:1"
      />
      <stop
        offset="100%"
        style="stop-color:#7700ca; stop-opacity:1"
      />
    </linearGradient>
  </defs>
  <path
    fill="url(#grad)"
    d="M15 3
        Q16.5 6.8 25 18
        A12.8 12.8 0 1 1 5 18
        Q13.5 6.8 15 3Z"
  />
</svg>

<style>
  .water-drop {
    width: 300px;
    height: 400px;
  }
  .water-drop path {
    stroke: #7700ca;
    stroke-width: 0.5;
  }
</style>
