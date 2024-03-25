import { createApp } from 'vue'
import App from './App.vue'
import {router} from '@/router/router';
import './globalstyles/GlobalCss.css'

createApp(App)
    .use(router)
    .mount('#app')
