<script setup>
import data from '/data.json'
import { RouterLink, RouterView } from 'vue-router'

const scroll = () => {
  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<template>
  <h1>{{ data.destinations[$route.params.id - 1].name }}</h1>
  <img
    :src="'/images/' + data.destinations[$route.params.id - 1].image"
    :alt="data.destinations[$route.params.id - 1].description"
  />
  <h1>Top Experiences in {{ data.destinations[$route.params.id - 1].name }}</h1>
  <ul>
    <li
      v-for="(experience, index) in data.destinations[$route.params.id - 1].experiences"
      :key="experience.id"
    >
      <div>
        <img
          :src="'/images/' + experience.image"
          alt="imagen"
        />
        <RouterLink :to="`/country/${$route.params.id}/experience/${index}`" @click="scroll">{{ experience.name }}</RouterLink>
      </div>
    </li>
  </ul>
  <RouterView />
</template>
<style scoped>
img {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  list-style: none;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}
ul img{
  width: 100%;
  border-radius: 5px;
}
</style>
