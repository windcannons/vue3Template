import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './plugins/setRem'
import 'amfe-flexible'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import piniaPluginPersist from 'pinia-plugin-persist'

const Pinia = createPinia()
Pinia.use(piniaPluginPersist)

const app = createApp(App)
app.use(ElementPlus)
app.use(Pinia)
app.use(router)

app.mount('#app')
