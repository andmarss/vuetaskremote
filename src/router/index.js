import Vue from "vue";
import Router from "vue-router";
import Main from "../components/views/Main.vue";
import About from "../components/views/About.vue";
import Contact from "../components/views/Contact.vue";

import Web from '../components/views/Web.vue';
import Seo from '../components/views/Seo.vue';
import Mobile from '../components/views/Mobile.vue';
import Ppc from '../components/views/Ppc.vue';
import Smm from '../components/views/Smm.vue';
import Dc from '../components/views/Dc.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "main",
            component: Main
        },
        {
            path: '/web',
            component: Web
        },
        {
            path: '/seo',
            component: Seo
        },
        {
            path: '/mobile',
            component: Mobile
        },
        {
            path: '/ppc',
            component: Ppc
        },
        {
            path: '/smm',
            component: Smm
        },
        {
            path: '/dc',
            component: Dc
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '*',
            component: Main
        },
        {
            path: '',
            component: Main
        }
    ]
});
