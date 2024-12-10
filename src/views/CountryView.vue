<script setup>
import data from '/data.json'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const route = ref(router.currentRoute)

const scroll = () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }, 100)
}

const handleRouter = (id, index) => {
  router.push({ path: `/country/${id}/experience/${index}` })
  scroll()
}

const goBack = (id) => {
  console.log(route.value)
  if (route.value.fullPath.includes('experience')) {
    router.push({ path: `/country/${id}` })
  } else {
    router.push({ path: '/' })
  }
}
</script>
<template>
  <div>
    <h1>{{ data.destinations[$route.params.id - 1].name }}</h1>
    <button @click="goBack($route.params.id)">Go back</button>
  </div>
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
      <div @click="handleRouter($route.params.id, index)" class="handle-router-div">
        <img :src="'/images/' + experience.image" alt="imagen" />
        <RouterLink :to="`/country/${$route.params.id}/experience/${index}`" @click="scroll">{{
          experience.name
        }}</RouterLink>
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
ul {
  width: 100%;
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
ul img {
  width: 100%;
  border-radius: 5px;
}
.handle-router-div {
  cursor: pointer;
}
button {
  margin: 10px;
}
</style>
