import { createRouter, createWebHistory } from 'vue-router'
//import store from '../store/store'
import HomeView from '../views/HomeView.vue'
import allProduct from '../views/AllProductView.vue'
import favourite from '../views/FavouriteView.vue'
import ProductDetail from '@/views/ProductDetailView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/your-favourite',
    name: 'favourite',
    component: favourite
  },
  {
    path: '/sanpham',
    name: 'allProduct',
    component: allProduct,
  },
  {
    path: '/sanpham/:pathParent',
    name: 'producttotal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/allProductChildren/ProductTotalView.vue'),
  },
  {
    path: '/sanpham/:pathChildren',
    name: 'productdetail',
    component: ProductDetail
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
