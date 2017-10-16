<template>
    <div class="weather-unit-widget">
        <span id="temp-unit-C"  class="selected" @click="c_unit_click">°C</span>
        <span id="temp-unit-F"  @click="f_unit_click">°F</span>
    </div>
</template>


<script>

export default {
    name: 'WeatherUnit',
    data () {
        return {
        }
    },
    methods:{
        c_unit_click : function(){
            this.$emit('changeUnit',"metric");
            this.cahangedUnit("metric");
        },
        f_unit_click : function(){
            this.$emit('changeUnit',"imperial");
            this.cahangedUnit("imperial");
        },
        cahangedUnit: function(units){

            if(units=='metric'){
                this.$el.querySelector('#temp-unit-C').setAttribute('class','selected');
                this.$el.querySelector('#temp-unit-F').setAttribute('class','');
            }else{
                this.$el.querySelector('#temp-unit-F').setAttribute('class','selected');   
                this.$el.querySelector('#temp-unit-C').setAttribute('class','');
 
            }
        }
    }
}
</script>

<style scoped>
    .weather-unit-widget {
        position: absolute;
        top: -20px;
        background-color: #d5e4f3;
        display: inline-block;
        color: #ccc;
    }

    .weather-unit-widget span {
        display: inline-block;
        height: 20px;
        width: 20px;
        text-align: center;
        font-size: 11px;
        color: #456686;
        line-height: 21px;
        float: left;
        cursor: pointer;
    }

    .weather-unit-widget span.selected {
        background-color: #92a9c0;
        box-shadow: 0px 0.5px 5.2px 0.1px rgba(0, 0, 0, 0.53);
        color: #fff;
    }
</style>
