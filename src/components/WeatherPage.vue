<template>
    <div>
        <SearchBar v-on:getWeatherData="getWeatherDataWithSearch"></SearchBar>
        <div id="weather-area">
            <div id="weather-capsu">
                <WeatherUnit v-on:changeUnit="changeUnitAndGetData"></WeatherUnit>
                <div id="today-capsul">
                    <WeatherToday v-bind:tempData="tempData"></WeatherToday>
                </div>
                <div id="weather-row-capsul">
                    <WeatherRow v-for="data in tempData.list" :key="data.dt"  v-bind:tempData="data"></WeatherRow> 
                </div>      
            </div>
        </div>
    </div>
</template>

<script>

import SearchBar from '@/components/SearchBar'
import WeatherToday from '@/components/WeatherToday'
import WeatherRow from '@/components/WeatherRow'
import WeatherUnit from '@/components/WeatherUnit'


export default {
  name: 'WeatherPage',
  data () {
    return {
        tempData:[],
        units:"metric",
        searchText:"İstanbul",
   }
  },
  components:{
    SearchBar,
    WeatherToday,
    WeatherRow,
    WeatherUnit
  },
  created() {
    this.getWeatherData();
  },
  methods:{
      getWeatherDataWithSearch: function (searchText) {
          this.searchText = searchText;
          this.getWeatherData();
      },changeUnitAndGetData: function(units){
          this.units = units;
          this.getWeatherData();
      },getWeatherData : function(){
        const url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&cnt=5&appid=58b6f7c78582bffab3936dac99c31b25&q="+this.searchText+"&units="+this.units;
        fetch(url).then((response) => {
            return response.json().then((json) => {
                this.tempData = json;
            });
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#weather-area {
    width: 100%;
    height: auto;
    margin-top: 120px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}

div#weather-capsu {
    position: relative;
    text-align: left;
    width: 550px;
    max-width: 90%;
    margin: auto;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.57);
    display: inline-block;
}

div#today-capsul,div#weather-row-capsul  {
    width: 50%;
    float: left;
}

@media screen and (max-width:560px) {
    div#today-capsul,div#weather-row-capsul{width:100%;}
    div#weather-area{ margin-top: 60px;}
}
</style>
