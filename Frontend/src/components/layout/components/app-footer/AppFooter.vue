<script lang="ts">
import { defineComponent, h, ref } from "vue";
import { type MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        "a",
        {
          href: "/#/about",
          rel: "noopenner noreferrer",
        },
        "About us"
      ),
    key: "about",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "/#/shipping",
          rel: "noopenner noreferrer",
        },
        "Shipping"
      ),
    key: "shipping",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "/#/contacts",
          rel: "noopenner noreferrer",
        },
        "Contacts"
      ),
    key: "contacts",
  },
];
export default defineComponent({
  setup() {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
    };
  },
});
</script>

<template>
  <div class="container">
    <div>shgsdghsldk</div>
    <n-menu
      class="footer"
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  bottom: 0px;
  max-width: 2400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  height: 100px;
}
.footer {
  font-size: 20px;
  /* width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; */
}
</style>
