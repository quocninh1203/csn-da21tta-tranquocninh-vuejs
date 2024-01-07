import { createApp } from 'vue'
import App from './App.vue'

import './assets/themify-icons/themify-icons.css'
import router from './router'
import store from './store/store.js';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App);

app.use(vuetify)
// Sử dụng router
app.use(router);
// Sử dụng store từ vuex
app.use(store)
// Mount ứng dụng vào #app
app.mount('#app');

