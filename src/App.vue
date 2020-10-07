<template>
  <div id="app" class="bg-dark d-flex justify-content-center align-items-center">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import LogIn from './components/LogIn.vue'

export default {
  name: 'App',
  components: {
    /*HelloWorld, LogIn*/
  }
}
</script>

<style>
  body, html {
    width: 100%;
    height: 100%;
  }
  #app {
    /*
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
     */
    width: 100%;
    height: 100%;
  }
</style>
