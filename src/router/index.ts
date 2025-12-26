// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
