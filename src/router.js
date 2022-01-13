import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/LoginForm.vue')
    },
    {
      path: '/join',
      name: 'Join',
      component: () => import('./views/JoinForm.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/board',
      name: 'Board',
      component: () => import('./views/Board/BoardList.vue')
    },
    {
      path: '/board/create',
      name: 'BoardCreate',
      component: () => import('./views/Board/BoardCreate.vue')
    },
    {
      path: '/board/:id',
      name: 'BoardDetail',
      component: () => import('./views/Board/BoardDetail.vue'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('./views/User/UserList.vue'),
    },
    {
      path: '/user/:id',
      name: 'UserDetail',
      component: () => import('./views/User/UserDetail.vue'),
    },
  ]
})
