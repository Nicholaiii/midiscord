import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/@/views/Home.vue'
import Debug from '/@/views/Debug.vue'
import Config from '/@/views/Config.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/debug', component: Debug },
  { path: '/config', component: Config },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
