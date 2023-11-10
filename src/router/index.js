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
    }
  ]
})

export default router
