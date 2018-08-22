import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from '@/views/Product'
// import Tech from '@/views/Tech'
import Team from '@/views/Team'
import News from '@/views/News'
import Careers from '@/views/Careers'
import Cooperate from '@/views/Cooperate'
import Contact from '@/views/Contact'
import Activities from '@/views/Activities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    // {
    //   path: '/tech',
    //   name: 'Tech',
    //   component: Tech
    // },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/cooperate',
      name: 'Cooperate',
      component: Cooperate
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    }
  ]
})
