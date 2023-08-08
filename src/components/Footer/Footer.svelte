<div class="footer">
  <a href="#/home">
    <div class="material-icons home-icon" />
    <span class="icon-text">Home</span>
  </a>

  <a href="#/water">
    <div class="material-icons water-icon" />
    <span class="icon-text">Water</span>
  </a>

  <a href="#/break">
    <div class="material-icons break-icon" />
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
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.2);
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

  .material-icons {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px 50px;
    padding: 25px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #7600ca;
    font-size: 1.1em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
  }
</style>
