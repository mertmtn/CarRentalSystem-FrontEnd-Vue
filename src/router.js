import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/login/Login.vue'
import Home from './components/home/Home.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: Home,
      },
    {
      path: '/login',
      component: Login,
    }
  ]
})