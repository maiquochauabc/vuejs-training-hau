import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "HomeContent",
        component: () =>
          import(
            /* webpackChunkName: "homecontent" */ "../components/Client/HomeContent.vue"
          ),
      },
      {
        path: "/products",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "products" */ "../views/Products.vue"),
      },
      {
        path: "products/page-:page",
        name: "Products-page",
        component: () =>
          import(/* webpackChunkName: "products" */ "../views/Products.vue"),
        props: true,
      },
    ],
  },
  // {
  //   path: "/products",
  //   name: "Products",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "products" */ "../views/Products.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
