<template>
    <div class="weather-row-widget">
        <span id="temp-icon" v-bind:class="getWeatherIcone(tempData.weather[0].id)"></span>
        <span id="temp-day">{{setToDate(tempData.dt)}}</span>
        <span id="temp-deg">{{parseInt(tempData.temp.max)}}-{{parseInt(tempData.temp.min)}} °C</span>
    </div>
</template>

<script>

export default {
    name: 'WeatherRow',
    props:['tempData'],
    data () {
        return {
            tempData:[],
            days:[""],
        }
    },
    methods: {
        setToDate:function(timestamp){
            var a = new Date(timestamp*1000);
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var dayOfWeek = days[a.getDay()]
            return dayOfWeek;
        },
        getWeatherIcone: function (weatherID) {
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

<style scoped>
    .weather-row-widget {
        display: inline-block;
        width: 100%;
        background-color: rgba(146, 169, 192, 0.58);
        color: #fff;
        font-size: 21px;
        line-height: 75px;
        box-sizing: border-box;
        padding: 0px 10px 0px 20px;
        border-bottom: 1px solid #fff;
        float: left;
    }

    .weather-row-widget span#temp-icon {
        width: 20%;
        display: inline-block !important;
        float:left;
        line-height: 70px;
    }

    .weather-row-widget span#temp-day {
        width: 50%;
        display: inline-block;
        float: left;
        text-align:center;
        font-size: 15px;
    }

    .weather-row-widget span#temp-deg {
        width: 30%;
        display: inline-block;
        float: right;
        font-size: 13px;
        text-align: right;
    }

    .weather-row-widget:last-child {
        border-bottom: none;
    }
</style>
