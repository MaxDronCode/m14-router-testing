// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CountryView from '@/views/CountryView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/country/:id',
    name: 'country',
    component: CountryView,
    children: [
      {
        path: 'experience/:exp',
        name: 'experience',
        component: ExperienceView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
