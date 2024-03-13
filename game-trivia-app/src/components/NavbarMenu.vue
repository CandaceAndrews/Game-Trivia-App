<template>
    <div class="navbar">
        <div class="nav-link">
            <img class="buttons-pic" src="@/assets/ps1-buttons.png" alt="playstation buttons">
            <router-link to="/" class="home-link" exact>Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarMenu',
}
</script>

<style>
body, html {
    margin: 0;
    padding: 0;
}

.navbar {
    background-color: rgb(165, 166, 173);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1000;
    border-bottom: 2px solid white;
}

.buttons-pic {
    max-width: 30px;
    height: auto;
}

.navbar-link {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover,
.router-link-exact-active {
    background-color: rgb(255, 34, 86);
    color: #fff;
    padding: 0px 5px 0px 5px;
}
</style>