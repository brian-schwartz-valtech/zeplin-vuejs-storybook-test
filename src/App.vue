<template>
  <div id="app">
    <MyButton buttonLabel="My Button"/>
    <br />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
import MyButton from './components/Button/Button.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
