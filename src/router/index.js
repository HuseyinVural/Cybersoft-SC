import Vue from 'vue'
import Router from 'vue-router'
import WeatherPage from '@/components/WeatherPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeatherPage',
      component: WeatherPage
    }
  ]
})
