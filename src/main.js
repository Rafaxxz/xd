import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import { i18n } from './i18n.js'
import './assets/styles/main.css'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(i18n)
app.mount('#app')