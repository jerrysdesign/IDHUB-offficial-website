import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Product from '@/containers/Product'
// import Tech from '@/containers/Tech'
import Team from '@/containers/Team'
import News from '@/containers/News'
import Careers from '@/containers/Careers'
import Cooperate from '@/containers/Cooperate'
import Contact from '@/containers/Contact'
import Activities from '@/containers/Activities'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
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
