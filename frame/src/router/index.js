import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// 引入Index
import Index from "../views/Index.vue";
import Tabbar from "../views/Tabbar.vue";
import Me from "../views/Me.vue";
import Search from "../views/Search.vue";


Vue.use(VueRouter);

const routes = [
  {path:"/search",component:Search},
  { path: "/me", component: Me },
  { path: "/tabbar", component: Tabbar },
  {
    path: "/",
    // name: "Home",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
