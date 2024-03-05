<template>
    <div class="game-thumbnail" @click="handleNavigateToGameQuiz">
    <img class="thumbnail-image" :src="Gamepad.thumbnailSource" :alt="game.title">
    <h3>{{ game.title }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        game: Object,
    },
    methods: {
        handleNavigateToGameQuiz() {
            this.$router.push(`/quiz/${this.game.id}`);
        },
    },
};
</script>