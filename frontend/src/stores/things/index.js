import { SET_THINGS } from "./mutations-types";
import { setThings } from "./mutations";
import { loadThings } from "./actions";

const moduleThings = {
  namespaced: true,
  state: {
    things: []
  },
  mutations: {
    [SET_THINGS]: setThings
  },
  actions: {
    loadThings: loadThings
  }
};

export default moduleThings;
