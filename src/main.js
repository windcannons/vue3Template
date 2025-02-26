import './assets/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './plugins/setRem'
import 'amfe-flexible'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import piniaPluginPersist from 'pinia-plugin-persist'
import isPhone
    from "@/utils/isPhone";


const Pinia = createPinia()
Pinia.use(piniaPluginPersist)

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(Pinia)
app.use(router)
// 全局注册自定义指令
app.directive('isPhone', isPhone)

app.mount('#app')
