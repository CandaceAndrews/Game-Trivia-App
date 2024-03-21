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
            <!-- Next Button -->
            <button class="next-button" v-if="userAnswers.length > 0" @click="moveToNextQuestion">Next Question</button>
        </div>
        <div v-else>
            <p>
                All questions answered!
            </p>
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
            correctAnswers: 0, // Initialize the count of correct answers
            userAnswers: [],
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
            const correctAnswer = this.currentQuestion.correctAnswers;
            if (option === correctAnswer) {
                this.correctAnswer; // Increment the count of correct answers
            }
            this.moveToNextQuestion();
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
</style>