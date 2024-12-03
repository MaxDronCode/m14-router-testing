<script setup>
import data from '/data.json'
</script>
<template>
  <h1>All destinations</h1>
  <ul>
    <li v-for="(destination) in data.destinations" :key="destination.id">
      <div>
        <h2>{{ destination.name }}</h2>
        <img :src="'/images/' + destination.image" alt="imagen" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

li {
  list-style: none;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: auto;
}

img{
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

</style>
