import Vue from "vue";
import Router from "vue-router";

import NotFound from "@/views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
    },
    {
      path: "/things",
      name: "thing-list",
      component: () =>
        import(/* webpackChunkName: "thing-list" */ "@/views/ThingList.vue")
    },
    {
      path: "/things/:id(\\d+)",
      props: true,
      name: "thing-detail",
      component: () =>
        import(/* webpackChunkName: "thing-detail" */ "@/views/ThingDetail.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/contact",
      name: "contact-me",
      component: () =>
        import(/* webpackChunkName: "contact-me" */ "@/views/ContactMe.vue")
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ]
});
