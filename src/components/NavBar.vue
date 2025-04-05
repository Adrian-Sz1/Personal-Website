<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const pdfUrl = '/Adrian_Szoszkiewicz_CV_2025.pdf';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};


const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Adrian-Szoszkiewicz-CV-2025.pdf';
  link.click();
};
const handleDownload = () => {
  closeMenu();
  downloadPdf();
};

</script>

<template>
  <nav>
    <RouterLink id="home-pic-link" to="/" @click="closeMenu">
      <img alt="logo" class="logo" src="/AS_LOGO_Favicon_192x192.ico"/>
    </RouterLink>
    <button class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul id="nav-links-container" :class="{ 'open': isMenuOpen }">
      <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
      <li><RouterLink to="/about" @click="closeMenu">About</RouterLink></li>
      <li><RouterLink to="/experience" @click="closeMenu">Experience</RouterLink></li>
      <li><RouterLink to="/projects" @click="closeMenu">Projects</RouterLink></li>
      <li><a @click="handleDownload">Download CV</a></li>
    </ul>
  </nav>
</template>

<style scoped>
#home-pic-link {
 display: flex;
 
}
#home-pic-link.router-link-exact-active:hover {
  background-color: transparent;
  cursor: pointer;
}
nav {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 70px;
  font-size: clamp(10px, 1rem, 1rem);
  background-color: transparent;
  border: none;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px rgb(0, 189, 126);
  padding: 0 1rem;
  z-index: 10;
}

.logo {
  border-radius: 15%;
  width: 50px;
  height: 50px;
}

.hamburger {
  display: none;
  cursor: pointer;
  padding: 10px;
  border: none;
  background: transparent;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--color-text);
}

#nav-links-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  margin-left: 20px;
}

#nav-links-container li {
  margin-left: 1rem;
}

nav a {
  cursor: pointer;
  display: block;
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--color-text);
}

nav a:hover {
  color: var(--content-box-title-color-highlight);
  background-color: transparent;
}

nav a.router-link-exact-active {
  color: var(--content-box-title-color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  cursor: default;
}

@media only screen and (max-width: 726px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    max-height: 9%;
    padding: 0.5rem;
  }

  .hamburger {
    display: block;
  }

  #nav-links-container {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 70px;
    left: -20px;
    z-index: 1;
  }

  #nav-links-container.open {
    display: flex;
  }

  #nav-links-container li {
    margin: 0;
  }

  nav a {
    padding: 1rem;
    display: block;
    text-align: center;
  }
}
</style>