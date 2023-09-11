
<script setup lang="ts">

</script>

<template>
 <div class="footer"> 
    <ul class="footer__info">
        <li><a href="/#/about"><strong>About us</strong></a></li>
        <li><a href="/#/contacts"><strong>Contacts</strong></a></li>
        <li><a href="/#/shipping"><strong>Shipping</strong></a></li>
    </ul>
</div>
</template>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
	width: 100%;
	height: 80px;
    background-color: #F3F3F3;
    font-size: 20px;
}
.footer__info{
    margin-left: 33%;
}
.footer a{
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    text-decoration: none;
    color: #131313;
}
.footer li{
    display: inline-block;
}
</style>