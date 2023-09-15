<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
});
import { useItemsStore } from "../../../../store/itemsStore";
const itemsStore = useItemsStore();
console.log(itemsStore);
</script>

<template>
  <div class="item__list">
    {{ itemsStore.items }}
  </div>
</template>

<template>
  <div class="item">
    <n-card></n-card>
  </div>
</template>

<style></style>
