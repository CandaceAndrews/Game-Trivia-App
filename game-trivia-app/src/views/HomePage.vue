<template>
    <!-- Home Page Intro -->
    <div class="home-page">
        <!-- PS1 Logo .gif -->
        <img class="ps1-logo-gif" src="@/assets/ps1-logo.gif" alt="ps1 logo fading in">
        <div class="greeting-section">
            <h1>PlayStation Trivia Quiz</h1>
            <p>Test your knowledge on classic PS1 games!</p>
            <img class="console-pic" src="@/assets/ps1-console.png" alt="ps1 console">
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
    font-family: 'Press Start 2P', sans-serif;
    font-size: 12px;
    color: white;
    background-color: black;
}

.ps1-logo-gif {
    max-width: 65%;
    height: auto;
}

.greeting-section {
    padding: 0px 50px 0px 50px;
}

.console-pic {
    max-width: 30%;
    height: auto;
    padding: 25px 5px 10px 5px;
}

.games {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
}

.games, h1 {
    padding-bottom: 20px;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
</style>