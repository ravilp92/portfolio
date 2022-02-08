import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('../src/assets/css/main.css');

createApp(App).use(store).use(router).mount('#app')
