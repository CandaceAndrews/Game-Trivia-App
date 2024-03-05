import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import game from '../data/GameThumbnailData.js';

const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        // { path: '/quiz/:id', name: ''}
    ],
});

export default router;