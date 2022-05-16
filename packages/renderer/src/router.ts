import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/@/views/Home.vue'
import Debug from '/@/views/Debug.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/debug', component: Debug }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
