import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mienbac',
    name: 'MienBacView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MienBacView.vue')
  },
  {
    path: '/miennam',
    name: 'MienNamView',
    component: () => import('../views/MienNamView.vue')
  },
  {
    path: '/mientrung',
    name: 'MienTrungView',
    component: () => import('../views/MienTrungView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
