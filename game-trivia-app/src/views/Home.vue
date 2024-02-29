<template>
    <div class="home-page">
        <div class="greeting-section">
            <h1>Welcome To The Video Game Trivia Quiz!</h1>
            <p class="greeting-text">Test your knowledge of your favorite video game!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style>
.home-page {
    margin: 50px 0px 0px 0px;
    position: relative; /* Make the parent container relative for absolute positioning */
    overflow-x: hidden;
}
</style>