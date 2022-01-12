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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoginForm.vue')
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
      path: '/user',
      name: 'User',
      component: () => import('./views/UserList.vue'),
    },
    {
      path: '/user/detail/:id',
      name: 'UserDetail',
      component: () => import('./views/UserDetail.vue'),
    },
  ]
})
