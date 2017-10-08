<template>
    <div class="weather-today-widget">
        <span id="temp-city">{{tempData.city.name}}</span>
        <span id="temp-icon" v-bind:class="getWeatherIcone(tempData.list[0].weather[0].id)"></span>
        <span id="temp-deg">{{parseInt(tempData.list[0].temp.day)}}°C</span>
        <span id="temp-state">{{tempData.list[0].weather[0].main}}</span>
        <span id="temp-wind">Wind: {{tempData.list[0].speed}} mph</span>
        <span id="temp-humidity">Humidity: {{tempData.list[0].humidity}}%</span>
    </div>
</template>


<script>

export default {
    name: 'WeatherToday',
    props:['tempData'],
    data () {
        return {
            tempData:[]
        }
    },
    methods: {
        getWeatherIcone: function (weatherID) {
            console.log(weatherID);
            switch(true) { 
                case weatherID>=200 && weatherID<=299: { 
                    console.log("içerde");
                    return "wi wi-thunderstorm";
                    break; 
                } 
                case weatherID>=300 && weatherID<=399: { 
                    return "wi wi-sprinkle";
                    break; 
                }
                case weatherID>=500 && weatherID<=599: { 
                    return "wi wi-rain";
                    break; 
                }
                case weatherID>=600 && weatherID<=699: { 
                    return "wi wi-snow";
                    break; 
                } 
                case weatherID>=700 && weatherID<=799: { 
                    return "wi wi-fog";
                    break; 
                }
                case weatherID==800:{ 
                    return "wi wi-day-sunny";
                    break; 
                }
                case weatherID==801:{ 
                    return "wi wi-day-cloudy";
                    break; 
                }
                case weatherID>=802 && weatherID<=804: { 
                    return "wi wi-cloudy";
                    break; 
                }
                case weatherID>=900 && weatherID<=909: { 
                    return "wi wi-tornado";
                    break; 
                }
                case weatherID>=910 && weatherID<=999: { 
                    return "wi wi-sandstorm";
                    break; 
                }    
                default: { 
                    return "wi wi-cloudys"; 
                    break; 
                } 
            }
        }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-today-widget {
    width: 100%;
    height: 100%;
    min-height: 379px;
    background-color: rgba(72, 115, 158, 0.77);
    box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.26);
    font-size: 11px;
    position: relative;
}

.weather-today-widget span {
    width: 100%;
    display: inline-block;
    text-align: center;
    color: #fff;
}

span#temp-city {
    font-size: 25px;
    line-height: 40px;
    margin-top: 70px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
}

span#temp-icon {
    height: 70px;
    margin-bottom: 15px;
    font-size: 65px;
}

span#temp-deg {
    font-size: 32px;
}

span#temp-state {
    font-size: 18px;
    margin-bottom: 15px;
}


</style>
