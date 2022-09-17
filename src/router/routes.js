import { createRouter, createWebHistory } from 'vue-router'
const App = () => import('../App.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
