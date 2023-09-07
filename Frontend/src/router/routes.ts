import { defineAsyncComponent } from "vue"

export const routes = [
  { path: "/", name: "Home", component: defineAsyncComponent(() => import("../views/Home.vue") )},
  { path: "/auth", name: "Auth", component: defineAsyncComponent(() => import("../views/Auth.vue")) },
];
