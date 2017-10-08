<template>
  <div id="app">
    <div id="app-blur-bg"></div>
    <div id="app-capsul">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>

import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,300,100');
@import url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css');

body {
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 15px;
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background-color: #000000;
}

#app-capsul {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

#app-blur-bg{
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
</style>
