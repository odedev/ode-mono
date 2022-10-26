import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
import WelcomeView from '../views/welcome/WelcomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import UserView from '../views/system/UserView.vue'
import RoleView from '../views/system/RoleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/welcome',
      children: [
        {
          path: 'welcome',
          component: WelcomeView,
        },
        {
          path: 'about',
          component: AboutView,
        },
        {
          path: 'user',
          component: UserView,
        },
        {path: 'role', component: RoleView},
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'homeview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
