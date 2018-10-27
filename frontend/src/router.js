import Vue from "vue";
import Router from "vue-router";

import NotFound from "./views/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home")
    },
    {
      path: "/things",
      name: "thing-list",
      component: () =>
        import(/* webpackChunkName: "thing-list" */ "./views/ThingList")
    },
    {
      path: "/things/:id(\\d+)",
      props: true,
      name: "thing-detail",
      component: () =>
        import(/* webpackChunkName: "thing-detail" */ "./views/ThingDetail")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About")
    },
    {
      path: "/contact",
      name: "contact-me",
      component: () =>
        import(/* webpackChunkName: "contact-me" */ "./views/ContactMe")
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ]
});
