import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Offer from '../components/Offer.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Offer',
    name: 'Offer',
    component: Offer,
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
