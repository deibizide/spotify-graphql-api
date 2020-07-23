import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from './components/Search.vue';
import ArtistPage from './components/ArtistPage.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Search,
        },
        {
            path: '/artist-page',
            component: ArtistPage,
        },
    ],
});
