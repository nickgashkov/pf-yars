import Vue from "vue";
import { SET_THING, SET_THINGS } from "./mutations-types";

const loadThing = ({ commit }, payload) => {
  Vue.http.get(`/api/things/things/${payload.id}/`)
    .then(
      response => {
        commit(SET_THING, {thing: response.data})
      }
    )
};

const loadThings = ({ commit }) => {
  Vue.http.get("/api/things/things/")
    .then(
      response => {
        commit(SET_THINGS, {things: response.data})
      }
    )
};

export { loadThing };
export { loadThings };
