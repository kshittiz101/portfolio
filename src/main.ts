import { createApp } from 'vue'
import App from './App.vue'
// import tailwindcss
import '@/assets/main.css'
import 'remixicon/fonts/remixicon.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
