import Vue from 'vue'
import Router from 'vue-router'

import home from './../components/home'
import PoliciesAndRegulations from './../components/policies-and-regulations'
import acticleb from './../components/acticleb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/PoliciesAndRegulations',
      name: 'PoliciesAndRegulations',
      component: PoliciesAndRegulations,
    },
    {
      path: '/acticleb',
      name: 'acticleb',
      component: acticleb,
    },
  ]
})
