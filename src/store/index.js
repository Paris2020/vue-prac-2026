/*import { createStore } from 'vuex';

import productsMod from './modules/products.js';
import cartMod from './modules/carts.js';

const store = createStore({
    modules: {
        prods: productsMod,
        cart: cartMod
    }
});

export default store; */

import Vue from "vue";
import Vuex from "vuex";

import productsMod from "./modules/products.js";
import cartMod from "./modules/carts.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    prods: productsMod,
    cart: cartMod,
  },
});

export default store;
