import Vue from 'vue'
import Router from 'vue-router'
import Charts from './views/Charts.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'charts',
      component: Charts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
