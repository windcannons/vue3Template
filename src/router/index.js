import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/indexView.vue')
    }, {
      path: '/details',
      name: 'details',
      component: () => import('../views/detailsView.vue')
    },
    {
      path: '/:catchAll(.*)', // 匹配所有路径
      redirect: '/' // 重定向到首页
    }
  ]
})

export default router
