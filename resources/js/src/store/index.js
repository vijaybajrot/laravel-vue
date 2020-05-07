import Vue from "vue";
import Vuex from "vuex";

const modules = {};

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        view: null
    },
    mutations: {
        initView(state, view) {
            state.view = view;
        }
    },
    modules
});

export function addModule(path, moduleObj) {
    store.registerModule(path, moduleObj);
    store.commit("initView", path);
}
