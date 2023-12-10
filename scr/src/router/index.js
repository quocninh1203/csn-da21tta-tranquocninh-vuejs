import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import allProduct from '../views/AllProductView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sanpham',
    name: 'allProduct',
    component: allProduct,
    children: [
      {
        path: 'mienbac',
        name: 'MienBacView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/allProductChildren/MienBacView.vue')
      },
      {
        path: 'miennam',
        name: 'MienNamView',
        component: () => import('../views/allProductChildren/MienNamView.vue')
      },
      {
        path: 'mientrung',
        name: 'MienTrungView',
        component: () => import('../views/allProductChildren/MienTrungView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
