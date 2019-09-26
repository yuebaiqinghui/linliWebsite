import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('@/views/home')
    },
    {
      path: '/us',
      name: '关于我们',
      component: () => import('@/views/us')
    },
    {
      path: '/product',
      name: '产品中心',
      component: () => import('@/views/product')
    },
    {
      path: '/contact',
      name: '联系我们',
      component: () => import('@/views/contact')
    }
  ]
})
