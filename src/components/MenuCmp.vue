<script setup>
import { RouterLink } from 'vue-router'
import data from '/data.json'
const url = '../../../country/'
</script>
<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-for="(country, i) in data.destinations" :to="url + country.id" :key="i">{{
      country.name
    }}</RouterLink>
  </nav>
</template>
<style scoped></style>