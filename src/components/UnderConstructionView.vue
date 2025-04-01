<template>
    <div class="construction-page">
      <div class="content">
        <img id="crane-img" class="filter-green" src="../assets/crane.svg" alt="Crane" />
        <h1 class="green">Under Construction</h1>
        <p>I am working hard to bring you an amazing experience.</p>
        <p>Please check back soon!</p>
        <div class="social-links" v-if="showSocial">
          <a :href="socialLinks.linkedin" target="_blank" v-if="socialLinks.linkedin">
            <img class="filter-green" src="../assets/linkedin.svg" alt="LinkedIn" />
          </a>
          <a :href="socialLinks.github" target="_blank" v-if="socialLinks.github">
            <img class="filter-green" src="../assets/github.svg" alt="GitHub" />
          </a>
        </div>
        <p class="contact" v-if="contactEmail">For any queries or questions contact: <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSocial: true, // Set to false to hide social links
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/adrian-szoszkiewicz-901136259",
          github: "https://github.com/Adrian-Sz1",
        },
        contactEmail: "adrianszoszkiewicz@gmail.com", // Set to null or "" to hide
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    z-index: 1000;
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
    height: 100vh;
    font-family: sans-serif;
    text-align: center;
  }
  

    .filter-green{
    filter: invert(47%) sepia(97%) saturate(1278%) hue-rotate(125deg) brightness(93%) contrast(106%);
    }

    .filter-dark-green {
    filter: invert(55%) sepia(98%) saturate(1278%) hue-rotate(125deg) brightness(93%) contrast(106%);
    }

  @media (hover: hover) {
    a:hover {
        background-color: #36967600;
    }
    .filter-green:hover {
    filter:  invert(37%) sepia(97%) saturate(2524%) hue-rotate(140deg) brightness(93%) contrast(98%);
  }
}


  .content {
    max-width: 600px;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 15px;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .social-links a {
    margin: 0 10px;
  }
  
  .social-links img {
    width: 30px;
    height: 30px;
  }
  
  .contact a {
    color: #007bff;
    text-decoration: none;
  }
  
  .contact a:hover {
    text-decoration: underline;
  }
  </style>