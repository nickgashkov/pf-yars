import Vue from "vue";
import Vuex from "vuex";

import moduleThings from "./stores/things";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    things: moduleThings
  }
});
