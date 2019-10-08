import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Util from "./helpers/util";
// 存储服务
var AV = require('leancloud-storage');
var { Realtime } = require('leancloud-realtime'); // 若不使用即时通讯服务，则无需引入

var APP_ID = 'jpOlzgnU9RtM6e5Yfe8wJG5Q-gzGzoHsz';
var APP_KEY = 'TmHsTJ2nP3ibdx1biKNU2MQh';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

Vue.use(Element);
Vue.use(Util);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
