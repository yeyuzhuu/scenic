import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// 引入Index
import Index from "../views/Index.vue";

import Tabbar from "../views/Tabbar.vue";

import Me from "../views/Me.vue";

import List from "../views/list.vue";

import Search from "../views/Search.vue";

import OrderList from "../views/OrderList.vue";

// 测试
// import Select from "../components/mint/select.vue"

Vue.use(VueRouter);

const routes = [
//   {path:"/select", component: Select},
  { path: "/list", component: List },
//   { path: "/search", component: Search },
  {path:"/orderlist",component:OrderList},
//   {path:"/orderdetail",component:OrderDetail},
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
