<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
    <wdi-day></wdi-day>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WdiDay from './components/WdiDay.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    WdiDay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
