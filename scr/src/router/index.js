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

    component: () => import(/* webpackChunkName: "about" */ '../views/allProductChildren/ProductTotalView.vue'),
    //meta: { requirespathParent: true },

  },
  {
    path: '/sanpham/:pathChildren',
    name: 'productdetail',
    component: ProductDetail,
    // meta: { requirespathChildren: true },

  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.requirespathChildren && !to.params.pathChildren) {
//     console.log('1');
//     next({ name: 'another-route' });
//   } else {
//     console.log('2');
    
//     next();
//   }
// });


export default router
