import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import { router } from './router/createRouter'
import 'virtual:uno.css'

const app = createApp(App)
app.use(naive)
app.use(router)

app.mount('#app')