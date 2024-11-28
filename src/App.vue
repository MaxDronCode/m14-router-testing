<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Productos</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
