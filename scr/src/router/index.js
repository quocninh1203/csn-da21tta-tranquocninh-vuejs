import { createRouter, createWebHistory } from 'vue-router'
//import store from '../store/store'
import HomeView from '../views/HomeView.vue'
import allProduct from '../views/AllProductView.vue'
import favouriteView from '@/views/FavouriteView.vue'
import administrator from '@/views/AdminiStratorView.vue'
import ProductDetail from '@/views/ProductDetailView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yourfavourite',
    name: 'favouriteView',
    component: favouriteView
  },
  {
    path: '/administrator',
    name: 'administrator',
    component: administrator
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
    //meta: { requirespathParent: true },

  },
  {
    path: '/sanpham/:pathChildren',
    name: 'productdetail',
    component: ProductDetail,
    // meta: { requirespathChildren: true },
    beforeEach: (to, from, next) => {
      // Kiểm tra nếu params rỗng
      if (!to.params.pathChildren || to.params.param === "") {
        // Chuyển hướng đến route khác (ví dụ: /default-route)
        next('/sanpham');
      } else {
        // Nếu params có giá trị, tiếp tục di chuyển đến route hiện tại
        next();
      }
    }
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.requirespathChildren && !to.params.pathChildren) {
//     next({ name: 'home' });
//   } else {
//     next();
//   }
// });
// router.beforeEach((to, from, next) => {
//   if (to.meta.requirespathParent && !to.params.pathParent) {
//     next({ name: '' });
//   } else {
//     next();
//   }
// });

export default router
