import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/homework',
      name: 'homework',
      component: () => import('../views/HwView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/userprofile/:id',
      name: 'userprofile',
      component: () => import('../views/UserProfile.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/ButtonsView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsView.vue')
    },
    {
      path: '/todolistvuex',
      name: 'todolistvuex',
      component: () => import('../views/TodoListVuex.vue')
    },
  ]
})

export default router
