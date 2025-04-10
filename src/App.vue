<script setup>
import { RouterView } from 'vue-router'
import TheParticles from '@/components/TheParticles.vue'
import NavBar from './components/NavBar.vue'
import UnderConstructionView from './components/UnderConstructionView.vue'

const isUnderConstruction = import.meta.env.VITE_APP_UNDER_CONSTRUCTION === 'true'

isUnderConstruction ? import('./components/UnderConstructionView.vue') : null
</script>

<template>
  <TheParticles />
  <div v-if="!isUnderConstruction">
    <NavBar />
    <div id="view">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <div v-else>
    <UnderConstructionView />
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
