import './assets/css/main.css'
import './assets/css/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const app = createApp(App)

app.use(router)

app.component('Splide', Splide)
app.component('SplideSlide', SplideSlide)

app.mount('#app')