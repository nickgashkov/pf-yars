import Vue from "vue";

const loadThings = ({ commit }) => {
  Vue.http.get("/api/things/things/")
    .then(
      response => {
        commit('SET_THINGS', {things: response.data})
      }
    )
};

export { loadThings };
