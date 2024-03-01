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
    name: 'Home',
    components: {
        GameSelection,
    },
    methods: {
        startQuiz(selectedGame) {
        // Optionally, you can navigate to the quiz page or handle the quiz initiation here
        this.$router.push('/quiz'); // If you're using Vue Router
        // Or emit an event to notify the parent component to start the quiz
        // this.$emit('start-quiz', selectedGame);
        }
    }
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