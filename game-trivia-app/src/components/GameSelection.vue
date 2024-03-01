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
export default {
    data() {
        return {
            selectedGame: null,
            ps1Games: ['Final Fantasy VII', 'Metal Gear Solid', 'Resident Evil', 'Crash Bandicoot', 'Spyro the Dragon'],
        };
    },
    methods: {
        selectGame() {
            this.$emit('game-selected', this.selectedGame);
        },
        startQuiz() {
            this.$router.push('/quiz');
        }
    }
};
</script>

