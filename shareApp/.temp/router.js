import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
// 组件懒加载
const Pages = (resolve) => require(['@/pages/pages'], resolve);

Vue.use(Router);

export const router = new Router({
  routes: [
    {
     path: '/',
     component: Pages,
    }
  ]
})
