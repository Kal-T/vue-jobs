import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css'
import toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from './router'

const app = createApp(App)

app.use(router);
app.use(toast);

app.mount('#app')
