<!-- ProductDetailView.vue -->
<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>ID: {{ product.id }}</p>
    <p>Descripción: {{ product.description }}</p>
    <RouterLink to="/products">Volver a Productos</RouterLink>
  </div>
  <div v-else>
    <p>Producto no encontrado.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const products = [
  { id: 1, name: 'Producto A', description: 'Descripción del Producto A' },
  { id: 2, name: 'Producto B', description: 'Descripción del Producto B' },
  { id: 3, name: 'Producto C', description: 'Descripción del Producto C' },
]

const product = computed(() => {
  const productId = parseInt(route.params.id)
  return products.find((p) => p.id === productId)
})
</script>
