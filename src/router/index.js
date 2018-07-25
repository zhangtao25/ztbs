import Vue from 'vue'
import Router from 'vue-router'

// Primary routing
import login from './../view/login'
import container from './../view/container'
// Two level routing
import home from './../view/container/home'

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
