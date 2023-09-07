<template>
    <div>
        {{ counter }}
        <n-button @click="incrementHandler">increment</n-button>
        <AppHeader />
        <slot></slot>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import useLayout from './useLayout.ts'
import './index.scss'

const { counter, incrementHandler } = useLayout()
</script>

