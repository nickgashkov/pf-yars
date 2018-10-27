import { SET_THING, SET_THINGS } from "./mutations-types";
import { setThing, setThings } from "./mutations";
import { loadThing, loadThings } from "./actions";

const moduleThings = {
  namespaced: true,
  state: {
    thing: {},
    things: []
  },
  mutations: {
    [SET_THING]: setThing,
    [SET_THINGS]: setThings
  },
  actions: {
    loadThing: loadThing,
    loadThings: loadThings
  }
};

export default moduleThings;
