/*global Vue*/
import Router from 'vue-router'
import order from '@/views/order'
import home from '@/views/home'
import mine from '@/views/mine'
Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: home,
    }, {
      path: '/order',
      component: order,
    }, {
      path: '/mine',
      component: mine,
    },
  ]
})
