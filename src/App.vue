<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Particles from './components/Particles.vue';
const pdfUrl = '/Adrian_Szoszkiewicz_CV_2025.pdf';

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Adrian-Szoszkiewicz-CV-2025.pdf';
  link.click();
};
</script>

<template>
  <div>
    <Particles/>
    <!-- <UnderConstructionView/> -->
    <!-- <TheProjects/> -->
  <header>
    <img alt="Vue logo" class="logo" src="../src/assets/profile-pic.jpg" width="125" height="125"/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <a @click="downloadPdf">CV Download</a>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
  <footer>
      <p>&copy; 2025 Adrian Szoszkiewicz</p>
  </footer>
</div>

</template>

<style scoped>

footer, p {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
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


@media (min-width: 1024px) {
  header {
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
    font-size: 1rem;
  }

  footer {
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  }
}
</style>
