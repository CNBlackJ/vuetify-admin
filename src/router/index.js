import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/admin',
    component: () => import('@/layout/Admin'),
    children: [
      {
        path: '/',
        name: 'amdin',
        component: () => import('@/pages/Admin/Index')
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/Admin/Dashboard')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/pages/Admin/Product')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/pages/Admin/User')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layout/Client'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/pages/Client/Index')
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