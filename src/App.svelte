<!-- App.svelte -->
<script>
  import  Router  from "svelte-spa-router";
  import routes from "./routes";
  import Footer from "$components/Footer/Footer.svelte";
</script>

<style>

</style>

<div class="app-container">
  <Router {routes} />
</div>
<Footer></Footer>
