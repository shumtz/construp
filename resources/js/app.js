require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import {routes} from './routes';
import Vue from 'vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
