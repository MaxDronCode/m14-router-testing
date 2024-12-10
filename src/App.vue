<script setup>
import { RouterView } from 'vue-router'
import MenuCmp from './components/MenuCmp.vue'
</script>
<template>
  <MenuCmp />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
