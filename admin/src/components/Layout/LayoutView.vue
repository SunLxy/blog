<script setup lang='ts'>
import LayoutHeader from './LayoutHeader.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <LayoutHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 14px;
  box-sizing: border-box;
}
</style>