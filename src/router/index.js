import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Tech from '@/pages/Tech'
import App from '@/pages/App'
import Team from '@/pages/Team'
import News from '@/pages/News'
import Careers from '@/pages/Careers'
import Cooperate from '@/pages/Cooperate'
import Contact from '@/pages/Contact'

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
      path: '/tech',
      name: 'Tech',
      component: Tech
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
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
    }
  ]
})
