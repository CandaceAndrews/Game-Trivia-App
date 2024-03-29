<template>
    <div class="game-quiz-page">
        <!-- Game Title -->
        <h1 class="game-title">{{ game.title }}</h1>
        <!-- Question -->
        <div v-if="currentQuestion">
            <div class="question">
                {{ currentQuestion.question }}
            </div>
            <!-- Options -->
            <div class="options">
                <button v-for="(option, index) in currentQuestion.options" :key="index" @click="checkAnswer(option)">
                    {{ option }}
                </button>
            </div>
            <!-- Results Button -->
            <button class="results-button" v-if="userAnswers.length > 0" @click="moveToNextQuestion">Results</button>
        </div>
        <div v-else-if="showResults">
            <!-- Results -->
            <div class="results">
                <p>You answered {{ correctAnswers }} out of {{ game.questions.length }} questions correctly.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        game: Object,
    },
    data() {
        return {
            currentQuestionIndex: 0,
            correctAnswers: 0,
            userAnswers: [],
            showResults: false,
        };
    },
    computed: {
        currentQuestion() {
            if (this.game.questions && this.game.questions.length > this.currentQuestionIndex) {
                return this.game.questions[this.currentQuestionIndex];
            }
            return null;
        },
    },
    methods: {
        checkAnswer(option) {
            const correctAnswer = this.currentQuestion.correctAnswer;
            if (option === correctAnswer) {
                this.correctAnswers++; // Increment the count of correct answers
            }
            this.userAnswers.push(option);
            if (this.currentQuestionIndex === this.game.questions.length - 1) {
                // Last question answered, show results
                this.showResults = true;
            } else {
                this.moveToNextQuestion();
            }
        },
        moveToNextQuestion() {
            this.currentQuestionIndex++;
            this.userAnswers = []; // Reset user answers for the next question
        },
    },
};
</script>

<style scoped>
.game-title {
    color: white;
}

.question {
    margin-bottom: 20px;
}

.options {
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
}

.options-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.options button {
    font-family: 'Press Start 2P', sans-serif;
    max-height: 35%;
    width: auto;
    margin: 10px 80px 10px 80px;
    padding: 18px;
    background-color: #397595;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.options button:hover {
    background-color: #64aacf;
}

.results-button {
    font-family: 'Press Start 2P', sans-serif;
    background-color: #a51111;
    color: white;
    padding: 18px;
}
</style>