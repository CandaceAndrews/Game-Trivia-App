import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import QuizPage from '@/views/QuizPage.vue';
import ps1Games from '../data/GameData.js';

const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/quiz/:id', name: 'quizPage', component: QuizPage, QuizPage, props: true},
    ],
});

router.beforeEach((to, from, next) => {
    if (to.name === 'quizPage' && to.params.id) {
        const game = ps1Games.find(p => p.id === parseInt(to.params.id));
        if (game) {
            to.params.game = game;
        }
    }
    next();
});

export default router;