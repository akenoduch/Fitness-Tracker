<script>
  let activeIcon = "home-icon";

  function setActive(iconClass) {
    activeIcon = iconClass;
  }
</script>

<div class="footer">
  <a
    href="#/home"
    class:active={activeIcon === "home-icon"}
    on:click={() => setActive("home-icon")}
  >
    <div
      class="material-icons home-icon"
      style="filter: {activeIcon === 'home-icon'
        ? 'grayscale(0%)'
        : 'grayscale(100%) brightness(2.5) contrast(0.8) saturate(0)'}"
    />
    <span class="icon-text">Home</span>
  </a>
  <a
    href="#/water"
    class:active={activeIcon === "water-icon"}
    on:click={() => setActive("water-icon")}
  >
    <div
      class="material-icons water-icon"
      style="filter: {activeIcon === 'water-icon'
        ? 'grayscale(0%)'
        : 'grayscale(100%) brightness(2.5) contrast(0.8) saturate(0)'}"
    />
    <span class="icon-text">Water</span>
  </a>
  <a
    href="#/break"
    class:active={activeIcon === "break-icon"}
    on:click={() => setActive("break-icon")}
  >
    <div
      class="material-icons break-icon"
      style="filter: {activeIcon === 'break-icon'
        ? 'grayscale(0%)'
        : 'grayscale(100%) brightness(2.5) contrast(0.8) saturate(0)'}"
    />
    <span class="icon-text">Break</span>
  </a>
</div>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.2);
  }

  .material-icons {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px 50px;
    padding: 25px;
    filter: grayscale(100%) brightness(1.2) contrast(0.8) saturate(0);
    transition: filter 0.5s ease;
  }

  .active {
    filter: grayscale(0%);
  }

  .home-icon {
    background-image: url(../../assets/home-icon.png);
  }
  .water-icon {
    background-image: url(../../assets/water-icon.png);
  }
  .break-icon {
    background-image: url(../../assets/break-icon.png);
  }

  .icon-text {
    color: gray;
    transition: color 0.3s ease;
  }

  .active .icon-text {
    color: #7700ca;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-size: 1.1em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
  }
</style>
