<script setup>
import { ref, onMounted } from 'vue';
const showAnimation = ref(false);

onMounted(() => {
  const hasPlayed = sessionStorage.getItem('aboutAnimationPlayed');
  if (!hasPlayed) {
    showAnimation.value = true;
    sessionStorage.setItem('aboutAnimationPlayed', 'true');
  }
});
</script>

<template>
  <div id="about-me-container">
    <div id="wrapper">
      <div id="left-content" :class="showAnimation ? 'fade-in' : ''" style="--order: 0">
        <h1 :class="showAnimation ? 'fade-in-left' : ''" style="--order: 0.5">About Me</h1>
        <h2 :class="showAnimation ? 'fade-in-left' : ''" style="--order: 1">"Build with purpose. Ship with pride."</h2>
        <p :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 5">
          It all started back in secondary school, when I was making silly little games for fun — nothing groundbreaking,
          but enough to completely hook me.
          There was something fascinating about writing a bunch of instructions and watching the computer follow them.
          That simple idea lit the spark that's kept me chasing better, smarter software ever since.
        </p>
        <p :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 7">
          My journey in software engineering gained significant momentum during my placement year prior to my graduation
          in the summer of 2024.
          During it, I gained invaluable experience working with .NET, KnockoutJS, and key aspects of an agile workflow.
          Experiencing real-world development for the first time and seeing how my work contributed to the bigger
          picture made a lasting impact and I've carried this since for every one of my projects - with intention and
          desire to deliver something I can be proud of.</p>
      </div>
      <hr :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 9" />
      <div id="right-content" :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 11">
        <p :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 13">
          My portfolio is a reflection of that mindset. From responsive frontends built with Vue and React, to backend
          services in Python, Java, and ASP.NET, each project has taught me something new. I've worked with MongoDB,
          Microsoft SQL Server, Docker, Nginx, Google Cloud Run, and used GitHub Actions for CI/CD automation — all tools
          in service of shipping meaningful software.
        </p>
        <p :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 15">
          As a result, I view each project — including all the silly little games I started out
          with — and my time at NantHealth, as a crucial step in my ongoing journey to becoming a well-rounded and
          effective software engineer.
        </p>
        <p :class="showAnimation ? 'fade-in-fast' : ''" style="--order: 17">
          When programming isn't on the menu though, I enjoy bouldering, staying active and exploring new places through travel whenever I can.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
hr {
  border: 1px solid rgb(0, 186, 129);
  margin: 0 1rem;
  height: 400px;
  min-height: 100%;
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(110%);
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

a {
  display: flex;
}

.fade-in-right {
  animation: fadeInRight 0.5s ease-in-out forwards;
  animation-delay: calc(var(--order) * 0.75s);
  opacity: 0;
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

.fade-in-fast {
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: calc(var(--order) * 0.25s);
  opacity: 0;
}

#about-me-container {
  margin-top: 100px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#right-content-container {
  max-width: 35%;
  display: flex;
  justify-content: left;
  align-items: center;
}

#profile-pic {
  width: clamp(125px, 45%, 35vw);
  height: auto;
  border-radius: 50%;
}

#wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin: 2rem;
}

h1 {
  text-align: left;
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1.2;
  color: var(--mode-color-h1-1);
  font-weight: bold;
}

h2 {
  text-align: left;
  font-size: clamp(1.2rem, 3vw, 2rem);
  line-height: 2.4rem;
  color: var(--mode-color-h2-1);
  font-weight: 500;
  font-style: italic;
}

#right-content {
  line-height: 1.5;
  margin: 1rem 0;
  max-width: 600px;
}

#left-content {
  justify-content: right;
  align-items: right;
  max-width: 600px;
}

p {
  text-align: left;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.65rem;
  margin: 1.5rem 0;
}

.p-emphasis {
  padding: 0;
  display: inline;
  font-weight: bold;
  color: var(--mode-color-h2-1);
}

#right-content p {
  text-align: left;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.social-links #icon-github,
#icon-linkedin,
#icon-email {
  width: clamp(36px, 5vw, 48px);
}

@media only screen and (max-width: 726px) {
  #wrapper {
    display: inline-block;
    margin: 2rem 1rem;
  }

  #about-me-container {
    align-items: center;
    margin-top: 0;
  }

  #right-content-container {
    margin-top: 50px;
  }

  #left-content {
    display: inline-block;
    justify-content: left;
    align-items: left;
    /* max-width: 600px; */
    /* margin-right: 4rem; */
  }

  #right-content {
    display: inline-block;
    margin: 0;
  }

  p,
  h1,
  h2 {
    text-align: left;
  }

  hr {
    border: none;
    border-top: 1px solid rgb(0, 186, 129);
    height: 1px;
    margin: 0.5rem 0;
  }
}
</style>