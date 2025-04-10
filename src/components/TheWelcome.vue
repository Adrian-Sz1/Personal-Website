<script setup>
import { ref, onMounted } from 'vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import IconEmail from './icons/IconEmail.vue'

const showAnimation = ref(false)

onMounted(() => {
  const hasPlayed = sessionStorage.getItem('welcomeAnimationPlayed')
  if (!hasPlayed) {
    showAnimation.value = true
    sessionStorage.setItem('welcomeAnimationPlayed', 'true')
  }
})

const showSocial = ref(true)
const socialLinks = ref({
  linkedin: 'https://www.linkedin.com/in/adrian-szoszkiewicz-901136259',
  github: 'https://github.com/Adrian-Sz1',
})
const contactEmail = ref('adrianszoszkiewicz@gmail.com')
</script>

<template>
  <div id="the-welcome">
    <div id="wrapper">
      <h1 id="hey" :class="showAnimation ? 'fade-in-left' : ''" style="--order: 0">Hey,</h1>
      <h1 :class="showAnimation ? 'fade-in-left' : ''" style="--order: 1.5">
        I'm Adrian Szoszkiewicz!
      </h1>
      <h2 :class="showAnimation ? 'fade-in-left' : ''" style="--order: 3">
        Graduate Software Engineer
      </h2>
      <div :class="showAnimation ? 'fade-in' : ''" style="--order: 4.5">
        <p>I'm a software engineer with a passion for creating innovative solutions.</p>
        <p>I love to learn and explore new technologies.</p>
        <p>Feel free to check out my projects and get in touch!</p>
      </div>
      <div
        :class="showAnimation ? 'social-links fade-in' : 'social-links'"
        style="--order: 4.5"
        v-if="showSocial"
      >
        <a :href="socialLinks.linkedin" v-if="socialLinks.linkedin">
          <IconLinkedIn id="icon-linkedin" class="svg-icon-link" />
        </a>
        <a :href="socialLinks.github" v-if="socialLinks.github">
          <IconGithub id="icon-github" class="svg-icon-link" />
        </a>
        <a :href="'mailto:' + contactEmail">
          <IconEmail id="icon-email" class="svg-icon-link" />
        </a>
      </div>
    </div>
    <div id="profile-pic-container">
      <img
        id="profile-pic"
        :class="showAnimation ? 'fade-in' : ''"
        style="--order: 6"
        src="../assets/profile-pic.jpg"
        alt="Profile picture"
      />
    </div>
  </div>
</template>
<style scoped>
#the-welcome {
  display: flex;
}

#profile-pic-container {
  max-width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#profile-pic {
  width: clamp(125px, 45%, 35vw);
  height: auto;
  border-radius: 50%;
}

#wrapper {
  margin: 10% 5%;
  padding: 1rem;
  overflow: hidden;
}

p {
  margin: 1rem 0;
}

@media only screen and (max-width: 726px) {
  #wrapper {
    margin: 2rem 1rem;
  }

  #the-welcome {
    flex-direction: column-reverse;
    align-items: center;
  }

  #profile-pic-container {
    margin-top: 50px;
  }
}
</style>
