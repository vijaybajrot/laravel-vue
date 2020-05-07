import Vue from "vue";
import VueRouter from "vue-router";

import App from "@app/App.vue";
import routes from "@app/routes";
import { store } from "@app/store";
import "@app/plugins/bootstrap-vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
