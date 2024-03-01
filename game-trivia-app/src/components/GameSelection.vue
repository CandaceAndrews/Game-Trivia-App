<template>
    <div>
        <label for="gameSelector"> Select a PlayStation 1 Game:</label>
        <select id="gameSelector" v-model="selectGame" @change="selectGame">
            <option v-for="game in ps1Games" :key="game">{{ game }}</option>
        </select>
        <button @click="startQuiz" :disabled="!selectedGame">Start Quiz</button>
    </div>
</template>

<script>
import ps1Games from '@/assets/data/GameTitleData.js';

export default {
    data() {
        return {
            selectedGame: null,
            ps1Games: ps1Games,
        };
    },
    methods: {
        selectGame() {
            this.$emit('game-selected', this.selectedGame);
        },
    }
};
</script>

