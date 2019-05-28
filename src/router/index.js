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
        path: 'pageconfig',
        name: 'pageconfig',
        component: () => import('@/pages/Admin/PageConfig')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/pages/Admin/Product')
      },
      {
        path: 'product/:id',
        name: 'productDetails',
        component: () => import('@/pages/Admin/Product/detail')
      },
      {
        path: 'inquiry',
        name: 'inquiry',
        component: () => import('@/pages/Admin/Inquiry')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/pages/Admin/Category')
      },
      {
        path: 'price',
        name: 'price',
        component: () => import('@/pages/Admin/Price')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@/pages/Admin/Order')
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
      },
      {
        path: 'products',
        name: 'productList',
        component: () => import('@/pages/Client/Product/list')
      },
      {
        path: 'products/:id',
        name: 'productDetail',
        component: () => import('@/pages/Client/Product/detail')
      },
      {
        path: 'carts',
        name: 'carts',
        component: () => import('@/pages/Client/Cart/')
      },
      {
        path: 'inquiry',
        name: 'inquiry',
        component: () => import('@/pages/Client/Inquiry/')
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/pages/Client/User/')
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