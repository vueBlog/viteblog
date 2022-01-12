import { createRouter, createWebHashHistory } from 'vue-router'

const PageHome = () => import('./../views/pageHome.vue')
const PageList = () => import('./../views/pageList.vue')
const PageAbout = () => import('./../views/pageAbout.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: PageHome
    },
    {
      path: '/list',
      name: 'list',
      component: PageList
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    }
  ]
})

export default router
