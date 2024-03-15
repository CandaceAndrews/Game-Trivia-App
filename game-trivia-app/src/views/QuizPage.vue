<template>
    <div class="game-quiz-page">
        <h1 class="game-title">{{ game.title }}</h1>
        <div v-if="currentQuestion">
            <div class="question">
                {{ currentQuestion.question }}
            </div>
            <div class="options">
                <button v-for="(option, index) in currentQuestion.options" :key="index" @click="checkAnswer(option)">
                {{ option }}
                </button>
            </div>
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
                alert('Correct');
            } else {
                alert('Incorrect!');
            }
            this.moveToNextQuestion();
        },
        moveToNextQuestion() {
            this.currentQuestionIndex++;
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
    flex-wrap: wrap;
}

.options button {
    margin: 5px;
}
</style>