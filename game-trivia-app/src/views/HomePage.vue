<template>
    <!-- Home Page Intro -->
    <div class="home-page">
        <div class="greeting-section">
            <h1>PlayStation 1 Trivia Quiz</h1>
            <p>Test your knowledge on classic PS1 games!</p>
        </div>
    </div>

    <!-- Game Thumbnails -->
    <div class="games">
        <GameThumbnail
            v-for="game in ps1Games"
            :key="game.id"
            :game="game"
        />
    </div>

</template>