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
import cartMod from "./modules/cart.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    //namespaces
    prods: productsMod,
    cart: cartMod,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
