<template>
  <div id="search-bar">
    <div id="search-bar-content">
      <input id="test-search-input" v-model="searchText" :placeholder="placeholderTekt" @keypress.enter="searchCityWeather"/>
      <input id="test-search-button" type="button"  value="GO"  @click="searchCityWeather"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchText: '',
      placeholderTekt:'Enter City Name ...',
      endPoint:''
    }
  },
  methods:{
    searchCityWeather(){
        this.$emit('getWeatherData',this.searchText);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div#search-bar {
    text-align: center;
}

div#search-bar-content {
    float: none;
    width: 400px;
    max-width: 95%;
    margin: auto;
    height: 28px;
    background-color: rgba(249, 249, 249, 0.72);
    margin-top: 30px;
    overflow: hidden;
}

#search-bar-content input {
    background: none;
    border: none;
    outline: none;
    float: left;
    text-align: left;
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    padding-left: 7px;
    font-size: 13px;
    width: 80%;
}

#search-bar-content input[type="button"] {
    float: left;
    width: 20%;
    box-sizing: border-box;
    background-color: #92a9c0;
    text-align: center;
    color: white;
    box-shadow: 0px 0px 16px 1px #5f5f5f;
}
</style>
