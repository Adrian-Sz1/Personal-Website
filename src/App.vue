<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/NavBar.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../src/assets/profile-pic.jpg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld></HelloWorld>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Me</RouterLink>
        <RouterLink to="/projects">My Projects</RouterLink>
        <RouterLink to="/cv">My CV</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
      <p>&copy; 2025 Adrian Szoszkiewicz</p>
  </footer>
</template>

<style scoped>
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding: calc(var(--section-gap) / 20);
    background-color: #222222;
    border-radius: 5%;
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
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  footer {
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  }
}
</style>
