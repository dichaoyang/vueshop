import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引入element-ui组件库
import ElementUI from "element-ui";
Vue.use(ElementUI);
// 引入css样式
import "./assets/css/base.css";
// 引入图标字体
import "./assets/fonts/iconfont.css";
// 引入axios
import axios from "axios";
// 配置公共根地址
axios.defaults.baseURL = "http://127.0.0.1:11333/api/private/v1/";
// 配置为Vue的成员
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
