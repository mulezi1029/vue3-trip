import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //导入路由对象
import pinia from './stores'   //导入pinia对象

import 'normalize.css'
import './assets/css/index.css'


createApp(App).use(router).use(pinia).mount('#app')
