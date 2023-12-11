import { createApp } from 'vue'
import App from './App.vue'
import './assets/themify-icons/themify-icons.css'
import router from './router'
import store from './store/store';



const app = createApp(App);


// Sử dụng router
app.use(router);
// Sử dụng store từ vuex
app.use(store)
// Mount ứng dụng vào #app
app.mount('#app');

