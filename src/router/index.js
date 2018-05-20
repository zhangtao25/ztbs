import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/HelloWorld'

import login from './../components/login'

import xxx from './../components/login/xxx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'xxx',
          name:'xxx',
          component:xxx
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
