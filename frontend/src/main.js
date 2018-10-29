import Vue from "vue";
import VueResource from "vue-resource";

import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

import App from "./App";
import router from "./router";
import store from "./store";

Vue.use(VueResource);
Vue.component("v-icon", Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
