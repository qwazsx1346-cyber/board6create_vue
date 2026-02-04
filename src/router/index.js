import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardWriteMod from '../views/BoardWriteMod.vue'
import BoardDetail from '@/views/BoardDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/write',
      component: BoardWriteMod,
    },
    {
      path: '/detail/:id',
      component: BoardDetail,
    },
  ],
})

export default router
