import Vue from 'vue'
import VueRouter from 'vue-router'

import { checkLogin } from '@/utils/utils'

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.获取路由信息
// 动态加载pages中所有的路由文件
const files = require.context('@/pages', true, /router\.js$/)
const routes = files.keys().map(key => {
  const page = require('@/pages' + key.replace('.', ''))
  return page.default
})

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // 校验登录状态
  if (to.name !== 'login' && !checkLogin()) {
    return next({ name: 'login' })
  }
  next()
})

router.afterEach(route => {
  const title = route.meta.title || 'vue template'
  document.title = title
})

// 4.导出
export default router
