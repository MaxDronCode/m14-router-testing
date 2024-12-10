<script setup>
import data from '/data.json'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
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

const props = defineProps({
  id: String,
})

const destination = computed(() => data.destinations[props.id - 1])
</script>
<template>
  <div>
    <h1>{{ destination.name }}</h1>
    <button @click="goBack(props.id)" class="button-56">Go back</button>
  </div>
  <div class="container">
    <img :src="'/images/' + destination.image" :alt="destination.description" />
    <p>
      {{ destination.description }}
    </p>
  </div>
  <h1>Top Experiences in {{ destination.name }}</h1>
  <ul>
    <li v-for="(experience, index) in destination.experiences" :key="experience.id">
      <div @click="handleRouter(props.id, index)" class="handle-router-div">
        <img :src="'/images/' + experience.image" alt="imagen" />
        <RouterLink :to="`/country/${props.id}/experience/${index}`" @click="scroll">{{
          experience.name
        }}</RouterLink>
      </div>
    </li>
  </ul>
  <RouterView />
</template>
<style scoped>
.container{
  display: flex;
  gap: 20px;
}
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
  margin: 20px;
}
.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: '';
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform 0.2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}
</style>
