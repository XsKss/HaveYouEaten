import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/config/rem";

Vue.config.productionTip = false;
if (process.env.NODE_ENV == "development") require("@/api/mock");

// 一般测试和开发环境下全部导入
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

// 按需导入

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
