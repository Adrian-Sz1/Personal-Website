<template>
    <div id="cv-preview">
      <embed style="width: 100vw; height: 84vh" :src="pdf" />
    </div>
  </template>
  
  <script setup>
  import pdf from "../assets/Adrian_Szoszkiewicz_CV_2025.pdf";
  </script>

<style>
  #cv-preview{
    overflow: hidden;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>