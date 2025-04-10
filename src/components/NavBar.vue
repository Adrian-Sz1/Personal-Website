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
  <nav data-testid="navbar">
    <RouterLink id="home-pic-link" data-testid="logo-link" to="/" @click="closeMenu">
      <img data-testid="logo-img" alt="logo" class="logo" src="/Main_Logo.png"/>
    </RouterLink>
    <button data-testid="hamburger-button" class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul id="nav-links-container" data-testid="navbar-link-container" :class="{ 'open': isMenuOpen }">
      <li><RouterLink data-testid="home-link" to="/" @click="closeMenu">Home</RouterLink></li>
      <li><RouterLink data-testid="about-link" to="/about" @click="closeMenu">About</RouterLink></li>
      <li><RouterLink data-testid="experience-link" to="/experience" @click="closeMenu">Experience</RouterLink></li>
      <li><RouterLink data-testid="projects-link" to="/projects" @click="closeMenu">Projects</RouterLink></li>
      <li><a data-testid="download-cv-link" @click="handleDownload">Download CV</a></li>
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
  background-color: var(--mode-color-text);
}

#nav-links-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  margin-left: 20px;
  z-index: 9;
}

#nav-links-container li {
  margin-left: 1rem;
}

nav a {
  cursor: pointer;
  display: block;
  margin: 0.5rem 1rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--mode-color-text);
}

nav a:hover {
  color: var(--as-u-color-a-1-highlight);
  background-color: transparent;
}

nav a.router-link-exact-active {
  color: var(--as-u-color-a-1-active);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  cursor: default;
}

@media only screen and (max-width: 726px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .hamburger {
    display: block;
  }

  #nav-links-container {
    display: flex;
    visibility: hidden;
    flex-direction: column;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 72px;
    left: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.85);
    margin: 0;
    backdrop-filter: blur(5px); 
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  #nav-links-container.open {
    display: flex;
    visibility: visible;
    left: 0;
    opacity: 1;
  }

  #nav-links-container li {
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0;
    width: 100%;
  }

  nav a {
    padding: 1rem;
    display: block;
    text-align: center;
  }
}
</style>