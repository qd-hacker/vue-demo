import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import '../lib/mui/css/mui.min.css';
import '../lib/mui/css/icons-extra.css';
// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入路由对象
import router from './router.js'
//导入根组件
// import App from './components/App.vue'
// const vm = new Vue({
//   el: '#app',
//   render:function(createElements){
//     return createElements(App)
//    },
//    router
// })
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 挂载路由
})



 