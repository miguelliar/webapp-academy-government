import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "inicio",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/info",
    name: "info",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/explora",
    name: "explora",
    component: () =>
      import(/* webpackChunkName: "explora" */ "../views/DiscoveryView.vue"),
  },
  {
    path: "/busca",
    name: "busca",
    component: () =>
      import(/* webpackChunkName: "busca" */ "../views/SearchView.vue"),
  },
  {
    path: "/busca/subvencion",
    name: "subvencion",
    component: () =>
      import(/* webpackChunkName: "subvencion" */ "../views/BidView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
