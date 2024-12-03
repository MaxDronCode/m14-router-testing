<script setup>
import data from '/data.json'
</script>
<template>
  <h1>{{data.destinations[$route.params.id - 1].experiences[$route.params.exp].name}}</h1>
  <img :src="'/images/' + data.destinations[$route.params.id - 1].experiences[$route.params.exp].image" alt="desc">
  <p>{{ data.destinations[$route.params.id - 1].experiences[$route.params.exp].description }}</p>
</template>
<style scoped></style>