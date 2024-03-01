<template>
    <div class="home-page">
        <div class="greeting-section">
            <h1>PlayStation 1 Trivia Quiz</h1>
            <p>Test your knowledge on classic PS1 games!</p>
        </div>
    </div>

    <GameSelection @game-selected="startQuiz" />

</template>

<script>
import GameSelection from '@/components/GameSelection.vue';

export default {
    name: 'HomePage',
    components: {
        GameSelection,
    },
    // methods: {
    //     startQuiz(selectedGame) {
    //     this.$router.push('/quiz');
    //     }
    // }
};
</script>

<style scoped>
.home-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
}
</style>