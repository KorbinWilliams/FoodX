import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Log from "../views/Log.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/logs/:id',
    name: 'log',
    component: Log
  }
]

const router = new VueRouter({
  routes
})

export default router
