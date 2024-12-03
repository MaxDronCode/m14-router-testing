<script setup>
import data from '/data.json'
import { RouterLink, RouterView } from 'vue-router'
const url = '../country/'
</script>
<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-for="(country, i) in data.destinations" :to="url + country.id" :key="i">{{
      country.name
    }}</RouterLink>
  </nav>
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
