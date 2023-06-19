import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import("@/pages/Main"),
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: () => import("@/pages/Tasks"),
    }
  ]
})
