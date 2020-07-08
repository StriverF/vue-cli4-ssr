import Vue from 'vue'
import VueRouter from 'vue-router'
// import vHome from '../views/Home.vue'

const vHome = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

Vue.use(VueRouter)

export default () => {
  const routes = [
    {
      path: '/',
      name: 'home',
      component: vHome,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

  return router
}
