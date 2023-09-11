import { defineAsyncComponent } from "vue"

export const routes = [
  { path: "/", name: "Home", component: defineAsyncComponent(() => import("../views/Home.vue") )},
  { path: "/auth", name: "Auth", component: defineAsyncComponent(() => import("../views/Auth.vue")) },
  { path: "/categories", name: "Categories", component: defineAsyncComponent(() => import("../views/Categories.vue")) },
  { path: "/sales", name: "Sales", component: defineAsyncComponent(() => import("../views/Sales.vue")) },
  { path: "/about", name: "About us", component: defineAsyncComponent(() => import("../views/About.vue")) },
  { path: "/shipping", name: "Shipping", component: defineAsyncComponent(() => import("../views/Shipping.vue")) },
  { path: "/contacts", name: "Contacts", component: defineAsyncComponent(() => import("../views/Contacts.vue")) },

];
