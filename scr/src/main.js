import { createApp } from 'vue'
import App from './App.vue'
import './assets/themify-icons/themify-icons.css'
import router from './router'

const app = createApp(App);


// Sử dụng router
app.use(router);

// Mount ứng dụng vào #app
app.mount('#app');
