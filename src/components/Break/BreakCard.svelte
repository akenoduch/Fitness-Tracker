<script>
  export let title = "";
  export let time = 0;
</script>

<div class="break-card">
  <div class="card-header">
    <h3>{title}</h3>
  </div>
  <div class="card-body" />
  <div class="card-footer">
    <span>{time} minutos</span>
  </div>
</div>

<style>
  .break-card {
    width: 100%;
    max-height: 25vh;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
  }
  .card-header,
  .card-footer {
    padding: 10px;
    background-color: #7700ca;
    color: white;
  }
  .card-body {
    padding: 10px;
  }
  .card-footer span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
  }
</style>
