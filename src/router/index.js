import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
]

const router = createRouter({
    history: createWebHistory('/Hostinger-Client/'),
    routes,
})

export default router