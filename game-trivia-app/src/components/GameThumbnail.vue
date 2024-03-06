<template>
    <div class="game-thumbnail" @click="handleNavigateToGameQuiz">
        <img class="thumbnail-image" :src="game.cover" :alt="game.title">
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

<style scoped>
.game-thumbnail {
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
}

.thumbnail-image {
    max-width: 65%;
    height: auto;
    object-fit: cover;
    border: 1px solid black;
    border-radius: 8px;
}

.game-thumbnail:hover {
    transform: scale(1.1);
}
</style>

