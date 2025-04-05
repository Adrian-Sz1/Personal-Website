<script setup>
import { ref, onMounted } from 'vue';

const showAnimation = ref(false);

onMounted(() => {
  const hasPlayed = sessionStorage.getItem('welcomeAnimationPlayed');
  if (!hasPlayed) {
    showAnimation.value = true;
    sessionStorage.setItem('welcomeAnimationPlayed', 'true');
  }
});

const showSocial = ref(true);
const socialLinks = ref({
  linkedin: "https://www.linkedin.com/in/adrian-szoszkiewicz-901136259",
  github: "https://github.com/Adrian-Sz1",
});
const contactEmail = ref("adrianszoszkiewicz@gmail.com");
</script>

<template>
  <div id="the-welcome">
    <div id="wrapper">
      <h1 id="hey" :class="showAnimation ? 'fade-in-left' : ''" style="--order: 0">Hey,</h1>
      <h1 :class="showAnimation ? 'fade-in-left' : ''" style="--order: 1.5">I'm Adrian Szoszkiewicz!</h1>
      <h2 :class="showAnimation ? 'fade-in-left' : ''" style="--order: 3">Graduate Software Engineer</h2>
      <div :class="showAnimation ? 'fade-in' : ''" style="--order: 4.5">
        <p>I'm a software engineer with a passion for creating innovative solutions.</p>
        <p>I love to learn and explore new technologies.</p>
        <p>Feel free to check out my projects and get in touch!</p>
      </div>
      <div :class="showAnimation ? 'social-links fade-in' : 'social-links'" style="--order: 4.5" v-if="showSocial">
        <a :href="socialLinks.linkedin" v-if="socialLinks.linkedin">
          <img id="linkedin" class="filter-green" src="../assets/linkedin.svg" alt="LinkedIn"/>
        </a>
        <a :href="socialLinks.github" v-if="socialLinks.github">
          <img id="github" class="filter-green" src="../assets/github.svg" alt="GitHub"/>
        </a>
      </div>
    </div>
    <div id="profile-pic-container">
      <img id="profile-pic" :class="showAnimation ? 'fade-in' : ''" style="--order: 6" src="../assets/profile-pic.jpg" alt="Adrian"/>
    </div>
  </div>
</template>
<style scoped>
.filter-green{
    filter: invert(47%) sepia(97%) saturate(1278%) hue-rotate(125deg) brightness(93%) contrast(106%);
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in-left {
  animation: fadeInLeft 0.5s ease-in-out forwards;
  animation-delay: calc(var(--order) * 0.75s);
  opacity: 0;
}
.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: calc(var(--order) * 0.75s);
  opacity: 0;
}
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

h1 {
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1.2;
  color: rgb(209, 222, 222);
  font-weight: bold;
}

h2 {
  font-size: clamp(1.2rem, 4vw, 2rem);
  line-height: 1.5;
  color: var(--content-box-title-color);
}

p {
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  line-height: 1.5;
  margin: 1rem 0;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
}

.social-links a {
  margin: 0.5rem;
}

.social-links img {
  width: clamp(20px, 5vw, 39px);
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