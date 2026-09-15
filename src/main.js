/*import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app'); */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
