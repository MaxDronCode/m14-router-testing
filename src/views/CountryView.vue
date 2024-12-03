<script setup>
import data from '/data.json'
// import ExperienceView from '@/views/ExperienceView.vue'
// import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// const expIndex = ref(0)
// const receiveIndex = (index) => {
//   console.log('Index desde countryView: ', index)
//   expIndex.value = index
// }
</script>
<template>
  <h1>{{ data.destinations[$route.params.id - 1].name }}</h1>
  <!-- <ul>
    <li v-for="destination in data.destinations" :key="destination.id">
      <RouterLink :to="`/country/${destination.id}`">{{ destination.name }}</RouterLink>
    </li>
  </ul>
  <RouterView /> -->
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
        <RouterLink :to="`/country/${$route.params.id}/experience/${index}`">{{ experience.name }}</RouterLink>
      </div>
    </li>
  </ul>
  <RouterView />
</template>
<style scoped>
img {
  border-radius: 5px;
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
