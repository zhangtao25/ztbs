import Vue from 'vue'
import Router from 'vue-router'

import home from './../components/home'
import acticlea from './../components/articlea'
import acticleb from './../components/acticleb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home,
    // },
    {
      path: '/acticlea',
      name: 'acticlea',
      component: acticlea,
    },
    {
      path: '/acticleb',
      name: 'acticleb',
      component: acticleb,
    },
  ]
})
