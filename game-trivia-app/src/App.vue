<template>
  <div id="app">
    <NavbarMenu />
    <router-view />
  </div>
  <footer>
    @ 2024 Candace Andrews
  </footer>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'

export default {
  name: 'App',
  components: {
    NavbarMenu,
  }
}
</script>

<style>
@font-face {
  font-family: 'Press Start 2P';
  src: url('@/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Press Start 2P', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #34423a; */
  background-color: black;
}

footer {
  color: white;
  margin-top: 50px;
  margin-bottom: 12px;
  font-size: small;
}
</style>
