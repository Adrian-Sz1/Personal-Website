<script setup>
const props = defineProps({
  technologies: {
    type: Array,
    required: true,
    validator: (value) => {
      if (!Array.isArray(value)) {
        return false;
      }
      return value.every((item) => typeof item === 'string');
    },
  },
});
</script>

<template>
  <ul id="skills-container">
    <li class="mint-pill-medium" v-for="technology in technologies" :key="technology">
      {{ technology }}
    </li>
  </ul>
</template>

<style scoped>
#out-skills-container {
    flex-grow: 1;
}

ul {
    padding: 0;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 0 10px 0 10px;
    margin: 0.35rem;
    margin-left: 0;
}

#skills-container {
    list-style-type: none;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
</style>