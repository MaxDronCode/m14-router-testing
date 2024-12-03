<script setup>
import data from '/data.json'
</script>
<template>
  <h1>{{data.destinations[$route.params.id - 1].experiences[$route.params.exp].name}}</h1>
  <img :src="'/images/' + data.destinations[$route.params.id - 1].experiences[$route.params.exp].image" alt="desc">
  <p>{{ data.destinations[$route.params.id - 1].experiences[$route.params.exp].description }}</p>
</template>
<style scoped>
img {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>