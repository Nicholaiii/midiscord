import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/@/views/Home.vue'
import Debug from '/@/views/Debug.vue'
import Config from '/@/views/Config.vue'
import Board from '/@/views/Board.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/debug', component: Debug },
  { path: '/config', component: Config },
  { path: '/board', component: Board },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
