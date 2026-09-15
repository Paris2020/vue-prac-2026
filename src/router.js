/*import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
  ]
});

export default router; */

import Vue from "vue";
import Router from "vue-router";

import ProductsList from "./pages/ProductsList.vue";
import UserCart from "./pages/UserCart.vue";
import ShopAdmin from "./pages/ShopAdmin.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/cart", component: UserCart },
    { path: "/admin", component: ShopAdmin },
  ],
});

export default router;