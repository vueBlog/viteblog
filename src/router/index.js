import { createRouter, createWebHashHistory } from "vue-router";

const PageHome = () => import("./../view/home.vue");
const PageList = () => import("./../view/list.vue");
const PageAbout = () => import("./../view/about.vue");

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: PageHome,
    },
    {
      path: "/list",
      name: "list",
      component: PageList,
    },
    {
      path: "/about",
      name: "about",
      component: PageAbout,
    },
  ],
});

export default router;
