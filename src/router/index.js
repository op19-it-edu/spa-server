import Vue from 'vue'
import Router from 'vue-router'

import timeline from '@/components/timeline'
import signup from '@/components/signup'
import login from '@/components/login'
import profile from '@/components/profile'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: timeline
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/user',
      component: user
    }
  ]
})