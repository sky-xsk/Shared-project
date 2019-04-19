/*global Vue*/
/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');
import mixins from '@/mixins/index';
import * as filters from '@/filters/index';
// 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.mixin(mixins);
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

