require('./bootstrap');
window.Vue = require('vue');

// Support vuex
import Vuex from 'vuex'
Vue.use(Vuex);
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
);
//Vuex

// VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import {routes} from './routes';
// VueRouter

Vue.component('main-component', require('./components/frontend/PublicMaster.vue').default);

const router = new VueRouter({
    routes,
    // mode: 'history'
});

const app = new Vue({
    el: '#app',
    router,
    store,
});
