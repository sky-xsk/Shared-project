/*global Vue*/
import mixins from './mixins';
/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');

Vue.mixin(mixins);
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

