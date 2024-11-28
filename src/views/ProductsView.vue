<!-- ProductsView.vue -->
<template>
  <h1>Productos</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      <RouterLink :to="`/products/${product.id}`">{{ product.name }}</RouterLink>
    </li>
  </ul>
  <!-- Aquí se renderizarán las rutas hijas -->
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Producto A' },
  { id: 2, name: 'Producto B' },
  { id: 3, name: 'Producto C' },
])
</script>
