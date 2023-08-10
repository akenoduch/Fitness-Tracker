<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Footer from "$components/Footer/Footer.svelte";
  import OrientationPopup from "$components/Orientation/OrientationPopup.svelte";
  import PopupForm from "$components/InitialPopup/PopupForm.svelte";
  import Notifications from "$components/Notification/Notifications.svelte";
</script>

<PopupForm />
<div class="app-container">
  <Router {routes} />
</div>
<Footer />
<OrientationPopup />
<Notifications />

<style>
  @font-face {
    font-family: "SF Pro Display";
    src: url("/fonts/SF-Pro-Display-Regular.otf");
  }
  * {
    font-family: "SF Pro Display";
  }
</style>
