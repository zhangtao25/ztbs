import Vue from 'vue'
import Router from 'vue-router'

// Primary routing
import login from './../view/login'
import container from './../view/container'
// Two level routing
import home from './../view/container/home'
import zcfg from './../view/container/zcfg'
import dwgk from './../view/container/dwgk'
import cjwt from './../view/container/cjwt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/container/home'
    },
    {
      path: '/container',
      name: 'container',
      component: container,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'zcfg',
          name: 'zcfg',
          component: zcfg
        },
        {
          path: 'dwgk',
          name: 'dwgk',
          component: dwgk
        },
        {
          path: 'cjwt',
          name: 'cjwt',
          component: cjwt
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
