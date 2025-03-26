<script setup>
import TheProjects from '../components/TheProjects.vue';
</script>

<template>
  <main>
    <TheProjects />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .projects {
    min-height: 1000vh;
    display: flex;
    align-items: center;
  }
}
</style>
