
<script setup lang="ts">
</script>

<template>
    <div class="header">
        <img class="logo" src="../../../../../public/assets/logo.svg">
        <div class="navigationdiv">
        <ul class="navigation">
        <li><a href="/#/"><strong>Home</strong></a></li>
        <li><a href="/#/auth"><strong>Sales</strong></a></li>
        <li><a href="/#/categories"><strong>Categories</strong></a></li>
        </ul>  
    </div>
    <div class="menu">
        <img class="search__icon" src="../../../../../public/assets/search.svg">
        <img class="user__icon" src="../../../../../public/assets/user.svg">
        <img class="logo__icon" src="../../../../../public/assets/cart.svg">
    </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F3F3F3;
        height: 150px;
    }
    .menu{
        width: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 3%;
    }
    .logo {
        display: flex;
        align-items: center;
        padding-left: 1%;
    }
    .navigation {
        font-size: 25px;
        width: 500px;
    }
    .navigation a{
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    text-decoration: none;
    color: #131313;
    }
    .navigation li{
        display: inline-block;
    }
</style>