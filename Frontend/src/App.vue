<template>
    <div>
        <Layout>
            <RouterView></RouterView>
        </Layout>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import {Layout} from './components/layout'

</script>

<style scoped>
</style>