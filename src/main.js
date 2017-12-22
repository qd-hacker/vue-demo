import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import '../lib/mui/css/mui.min.css';
import '../lib/mui/css/icons-extra.css';
// 配置路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 导入路由对象
import router from './router.js';

// 配置 axios
import axios from 'axios';
Vue.prototype.$http = axios.create({
  baseURL: 'http://39.106.32.91:3000/'
})

import App from './components/App.vue';

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 挂载路由
})



 