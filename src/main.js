import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// ✅ Axios setup
import axios from 'axios' // <- You were missing this import!
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000'

// Optional: if using a custom instance (axios.js), import that instead
// import api from './axios'
// app.config.globalProperties.$axios = api

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: true,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
