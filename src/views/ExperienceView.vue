<script setup>
import data from '/data.json'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const destination = ref(data.destinations[route.params.id - 1])
</script>
<template>
  <h1>{{ destination.experiences[$route.params.exp].name }}</h1> 
  <div>
    <img :src="'/images/' + destination.experiences[$route.params.exp].image" alt="desc" />
    <p>{{ destination.experiences[$route.params.exp].description }}</p>
  </div>
</template>
<style scoped>
img {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 300px;
}

div{
  display: flex;
  padding: 20px;
}
p{
  padding: 20px;
  line-height: 1.5;
  
  -webkit-font-smoothing: antialiased;
}
</style>
