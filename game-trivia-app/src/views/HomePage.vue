<template>
    <!-- PS1 Logo .gif -->
    <img src="@/assets/ps1-logo.gif" alt="ps1 logo fading in">

    <!-- Home Page Intro -->
    <div class="home-page">
        <div class="greeting-section">
            <h1>PlayStation 1 Trivia Quiz</h1>
            <p>Test your knowledge on classic PS1 games!</p>
        </div>
    </div>

    <!-- Game Thumbnails -->
    <div class="games">
        <h1>Game Selection</h1>
        <div class="game-grid">
            <GameThumbnail
                v-for="game in ps1Games"
                :key="game.id"
                :game="game"
            />
        </div>
    </div>
</template>

<script>
import GameThumbnail from '../components/GameThumbnail.vue';
import ps1Games from '@/data/GameData.js';

export default {
    components: {
        GameThumbnail,
    },
    data() {
        return {
            ps1Games,
        };
    },
    methods: {
        navigateToGameQuiz(game) {
            this.$router.push({name: 'quizPage', params: { id: game.id }});
        },
    },
};
</script>

<style scoped>
.home-page {
    margin-top: 75px;
}

.games {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
    background-color: grey;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
</style>