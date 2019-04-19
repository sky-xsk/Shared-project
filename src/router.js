/*global Vue*/
import Router from 'vue-router'
import pages from '@/views/pages'
Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'pages',
      component: pages,
    },
  ]
})
