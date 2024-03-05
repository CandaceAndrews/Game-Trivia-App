<template>
    <div>
        <h2>Select a PlayStation 1 Game:</h2>
        <div class="thumbnail-gallery">
            <div v-for="game in ps1Games" :key="game" @click="selectGame(game)" class="thumbnail">
                <img :src="getThumbnailPath(game)" :alt="game" />
                <p>{{  game  }}</p>
            </div>
        </div>
        <button @click="startQuiz" :disabled="!selectedGame"> Start Quiz</button>
    </div>
</template>

<script>
import ps1Games from '../data/GameTitleData.js';

export default {
    data() {
        return {
            selectedGame: null,
            ps1Games: ps1Games,
        };
    },
    methods: {
    selectGame(game) {
      this.selectedGame = game;
    },
    startQuiz() {
      if (this.selectedGame) {
        // Emit an event to notify the parent component (Home) of the selected game
        this.$emit('game-selected', this.selectedGame);
      }
    },
    getThumbnailPath(game) {
      // Assuming you have thumbnail images in your assets folder
      return require(`@/assets/thumbnails/${game.toLowerCase()}.png`);
    },
  },
};
</script>

<style scoped>
.thumbnail-gallery {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail {
  margin: 10px;
  cursor: pointer;
}

.thumbnail img {
  width: 100px; /* Adjust the size as needed */
  height: 100px;
  object-fit: cover;
  border: 2px solid transparent;
}

.thumbnail img:hover {
  border-color: #007BFF; /* Add a border color on hover */
}
</style>
../data/GameThumbnail.js
