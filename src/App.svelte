<!-- App.svelte -->
<script>
  import  Router  from "svelte-spa-router";
  import routes from "./routes";
  import Footer from "$components/Footer/Footer.svelte";
  import OrientationPopup from "$components/Orientation/OrientationPopup.svelte";
</script>

<style>
</style>

<div class="app-container">
  <Router {routes} />
</div>
<Footer />
<OrientationPopup />
