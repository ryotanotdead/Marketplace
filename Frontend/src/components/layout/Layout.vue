<template>
    <div>
        <AppHeader />
        <slot></slot>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import './index.scss'
</script>

