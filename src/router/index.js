import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const adminPathRegex = new RegExp('^/admin/*')

router.beforeEach((to, from, next) => {
  if (adminPathRegex.test(to.path)) {
    // 检查token
    const authToken = getToken()
    if (!authToken) {
      return router.push('/login/admin')
    } else {
      next ()
    }
  }
  next()
})

export default router