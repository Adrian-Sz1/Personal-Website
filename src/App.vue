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
  margin-top: 70px;
  /* min-height: calc(100vh - 50px); */
  padding: 0 1rem;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 
header {
  line-height: 1.5;
}
nav {
  font-size: clamp(10px, 1rem, 1rem);
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

img {
  border-radius: 50%;
} */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease-in;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}


@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding: calc(var(--section-gap) / 20);
    background-color: #222222;
    border: #222222 1px solid;
    border-radius: 15px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
  } */

  footer {
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  }
}

/* @media (min-width: 896px) {
  nav {
    font-size: 1rem;
  }
}

@media (min-width: 384px) {
  nav {
    font-size: 0.6rem;
  }
} */
</style>
