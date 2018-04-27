import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tech from '@/components/Tech'
import App from '@/components/App'
import Team from '@/components/Team'
import News from '@/components/News'
import Careers from '@/components/Careers'
import Cooperate from '@/components/Cooperate'
import Contact from '@/components/Contact'

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
