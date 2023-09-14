<script setup lang="ts"></script>
<template>
  <div class="item__list">
    <n-card class="item" title="Haori A">
      <template #cover>
        <img src="../../public/assets/haori1.jpg" />
      </template>
      Haori Description
    </n-card>
    <n-card class="item" title="Haori B">
      <template #cover>
        <img src="../../public/assets/haori2.jpg" />
      </template>
      Haori Description
    </n-card>
    <n-card class="item" title="Haori C">
      <template #cover>
        <img src="../../public/assets/haori3.jpg" />
      </template>
      Haori Description
    </n-card>
    <n-card class="item" title="Haori D">
      <template #cover>
        <img src="../../public/assets/haori4.jpg" />
      </template>
      Haori Description
    </n-card>
  </div>
  <div class="item__list">
    <n-card class="item" title="Haori E">
      <template #cover>
        <img src="../../public/assets/haori5.jpg" />
      </template>
      Haori Description
    </n-card>
    <n-card class="item" title="Haori F">
      <template #cover>
        <img src="../../public/assets/haori6.jpg" />
      </template>
      Haori Description
    </n-card>
    <n-card class="item" title="Haori G">
      <template #cover>
        <img src="../../public/assets/haori7.jpg" />
      </template>
      Haori Description
    </n-card>
    <n-card class="item" title="Haori H">
      <template #cover>
        <img src="../../public/assets/haori8.jpg" />
      </template>
      Haori Description
    </n-card>
  </div>
</template>

<style scoped>
.item__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30%;
  margin-right: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.item {
  max-width: 200px;
}
</style>
