<template>
    <div class="navbar">
        <router-link to="/" class="nav-link" exact>Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
body, html {
    margin: 0;
    padding: 0;
}

.navbar {
    background-color: rgb(66, 81, 74);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    position: fixed;
}
</style>