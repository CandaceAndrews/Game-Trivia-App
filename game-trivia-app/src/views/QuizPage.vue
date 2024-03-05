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