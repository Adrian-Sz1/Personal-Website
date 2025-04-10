<script setup>
import { ref } from 'vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'

const showSocial = ref(true)
const socialLinks = ref({
  linkedin: 'https://www.linkedin.com/in/adrian-szoszkiewicz-901136259',
  github: 'https://github.com/Adrian-Sz1',
})
const contactEmail = ref('adrianszoszkiewicz@gmail.com')
</script>
<template>
  <div class="construction-page">
    <div class="content">
      <img id="crane-img" class="filter-green" src="../assets/crane.svg" alt="Crane" />
      <h1>Under Construction</h1>
      <p>I am working hard to bring you an amazing experience.</p>
      <p>Please check back soon!</p>
      <div class="social-links" v-if="showSocial">
        <a :href="socialLinks.linkedin" target="_blank" v-if="socialLinks.linkedin">
          <IconLinkedIn id="icon-linkedin" class="svg-icon-link" />
        </a>
        <a :href="socialLinks.github" target="_blank" v-if="socialLinks.github">
          <IconGithub id="icon-github" class="svg-icon-link" />
        </a>
      </div>
      <p class="contact" v-if="contactEmail">
        For any queries or questions contact:
        <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
      </p>
    </div>
  </div>
</template>
<style scoped>
* {
  z-index: 1;
}

#crane-img {
  width: 150px;
  height: 150px;
  pointer-events: none;
}

.construction-page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.filter-green {
  filter: invert(47%) sepia(97%) saturate(1278%) hue-rotate(125deg) brightness(93%) contrast(106%);
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: var(--mode-color-a-1);
  font-weight: normal;
}

p {
  margin: 1rem 0;
}

.social-links {
  justify-content: center;
  margin-top: 20px;
}

.social-links a {
  margin: 0 10px;
}

.contact a {
  display: inline;
}
</style>
