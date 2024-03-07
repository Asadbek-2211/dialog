import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import { store }  from "./store/main.js"
const app = createApp(App).use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
