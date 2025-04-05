<script setup>
import { RouterView } from 'vue-router'
import Particles from './components/Particles.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar/>
  <Particles/>
  <!-- <UnderConstructionView/> -->
  <!-- <TheProjects/> -->
    <div id="view">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
</template>

<style scoped>
#view {
  display: flex;
  padding: 0 1rem;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease-in;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
