import Vue from "vue";
import VueResource from "vue-resource";
import "bulma";

import App from "./App";
import router from "./router";
import store from "./store";

Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
