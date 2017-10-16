<template>
    <div class="weather-today-widget">
        <span id="temp-city">{{tempData.name}}</span>
        <span id="temp-icon" v-bind:class="getWeatherIcone(tempData.weather[0].id)"></span>
        <span id="temp-deg">{{parseInt(tempData.main['temp'])}}°C</span>
        <span id="temp-state">{{tempData.weather[0].main}}</span>
        <span id="temp-wind">Wind: {{tempData.wind.speed}} mph</span>
        <span id="temp-humidity">Humidity: {{tempData.main.humidity}}%</span>
    </div>
</template>


<script>

export default {
    name: 'WeatherToday',
    props:["serachTextPar","unitsPar"],
    data () {
        return {
            tempData:[],
            serachText:this.serachTextPar,
            units:this.unitsPar
        }
    },
    created(){
        this.getTodayData();
    },
    watch: {
        serachTextPar: function () {
            this.serachText = this.serachTextPar
            this.getTodayData();
        },
        unitsPar: function () {
            this.units = this.unitsPar
            this.getTodayData();
        }
    },
    methods: {
        getTodayData: function(){
            const url = "http://api.openweathermap.org/data/2.5/weather?q="+this.serachText+"&apiKey=58b6f7c78582bffab3936dac99c31b25&units="+this.unitsPar;
            fetch(url).then((response) => {
                console.log(url);
                return response.json().then((json) => {
                    this.tempData = json;
                });
            });

        },
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
