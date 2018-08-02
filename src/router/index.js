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
import PartyMemberManagement from './../view/container/party-member-management'
// Three level routing
import pmmadd from './../view/container/party-member-management/pmmadd'
import pmmdel from './../view/container/party-member-management/pmmdel'
import pmmchange from './../view/container/party-member-management/pmmchange'
import pmmfind from './../view/container/party-member-management/pmmfind'

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
        },
        {
          path: 'pmm',
          name: 'pmm',
          component: PartyMemberManagement,
          children: [
            {
              path: 'pmmadd',
              name: 'pmmadd',
              component: pmmadd
            },
            {
              path: 'pmmdel',
              name: 'pmmdel',
              component: pmmdel
            },
            {
              path: 'pmmchange',
              name: 'pmmchange',
              component: pmmchange
            },
            {
              path: 'pmmfind',
              name: 'pmmfind',
              component: pmmfind
            },
          ]
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
