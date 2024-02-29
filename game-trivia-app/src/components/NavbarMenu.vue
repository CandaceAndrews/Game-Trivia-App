<template>
    <div class="navbar">
        <router-link to="/" class="nav-link" exact>Home</router-link>
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
    background-color: rgb(66, 81, 74);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1000;
}

.navbar-link {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover,
.router-link-exact-active {
    background-color: rgb(97, 126, 113);
    color: #fff;
}
</style>