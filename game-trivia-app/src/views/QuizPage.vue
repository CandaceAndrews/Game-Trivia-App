<template>
    <div class="game-quiz-page">
        <h1>{{ game.title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        game: Object,
    },
}
</script>

<style scoped>
.home-page {
    margin-top: 75px;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 12px;
    color: white;
    background-color: black;
}
</style>