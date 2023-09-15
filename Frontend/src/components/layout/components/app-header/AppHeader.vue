<script lang="ts">
import { defineComponent, h, ref } from "vue";
import { type MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        "a",
        {
          href: "/#/",
          rel: "noopenner noreferrer",
        },
        "Home"
      ),
    key: "home",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "/#/sales",
          rel: "noopenner noreferrer",
        },
        "Sales"
      ),
    key: "sales",
  },
  {
    label: "Categories",
    key: "Categories",
    children: [
      {
        label: () =>
          h(
            "a",
            {
              href: "/#/haori",
              rel: "noopenner noreferrer",
            },
            "Haori"
          ),
        key: "haori",
        props: {
          style: {
            color: "red",
          },
        },
      },
      {
        label: () =>
          h(
            "a",
            {
              href: "/#/kistune",
              rel: "noopenner noreferrer",
            },
            "Masks"
          ),
        key: "mask",
      },
      {
        label: () =>
          h(
            "a",
            {
              href: "/#/cosplay",
              rel: "noopenner noreferrer",
            },
            "Cosplay"
          ),
        key: "cosplay",
      },
    ],
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
    <img class="logo" src="../../../../../public/assets/logo.svg" />
    <n-menu
      class="header"
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
    <div class="menu">
      <img class="search__icon" src="../../../../../public/assets/search.svg" />
      <img class="user__icon" src="../../../../../public/assets/user.svg" />
      <img class="logo__icon" src="../../../../../public/assets/cart.svg" />
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 20px;
}
.container {
  max-width: 2400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  height: 150px;
}
.logo {
  display: flex;
  align-items: center;
  padding-left: 1%;
}
.menu {
  width: 6%;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  padding-right: 3%;
}
</style>
