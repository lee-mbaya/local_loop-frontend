import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'leaflet/dist/leaflet.css';


// Create and mount the Vue app
createApp(App)
  .use(createPinia())  // Use Pinia store
  .use(router)
  .mount('#app')
