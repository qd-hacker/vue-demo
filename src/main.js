import Vue from 'vue';

import'./globalconfig.js';
// 配置路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 导入路由对象
import router from './router.js';
import App from './components/App.vue';
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 挂载路由
})




 