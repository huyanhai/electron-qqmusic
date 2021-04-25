import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../layout/Index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("../views/Home/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
