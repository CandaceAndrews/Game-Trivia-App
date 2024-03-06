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
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34423a;
  background-color: #d3e3d9;
}

footer {
  color: #69736d;
  margin-top: 50px;
  font-size: small;
}
</style>
