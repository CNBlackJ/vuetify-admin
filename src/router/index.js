import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/pages/Index')
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/Dashboard')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('@/pages/Product')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/pages/User')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router