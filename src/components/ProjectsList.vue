<script setup>
import ContentBox from './ContentBox.vue';
import { TECHNOLOGIES as T} from './technologies';
const { LANGS, FRAMEWORKS, BUILD_TOOLS, DATABASES, DEVOPS_TOOLS, TESTING, MONITORING, ARCHITECTURE ,OTHER } = T;
</script>

<template>
  <ol>
    <li>
      <ContentBox
      urlLink="https://github.com/Adrian-Sz1/Personal-Website"
      dateRange="2025 - Present"
      header="Personal Portfolio Website"
      subHeader="Personal Project"
      desc="Source code for my website used for showcasing my projects, CV and information about myself serving as my portfolio."
      :technologyList="[
        FRAMEWORKS.VUE,
        LANGS.HTML_CSS, 
        BUILD_TOOLS.VITE, 
        DEVOPS_TOOLS.NGINX, 
        DEVOPS_TOOLS.GOOGLE_RUN, 
        DEVOPS_TOOLS.CI_CD, 
        BUILD_TOOLS.NPM]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://gist.github.com/Adrian-Sz1/06ca44d57d83afe2ee0d21bb30977e08"
      dateRange="2024 - Present"
      header="Unity Planetary Mesh Generator Tool Sample"
      subHeader="Personal Project"
      desc="A Unity-based tool for generating 3D planetary meshes for procedural terrain generation and biomes using simplex noise functions and multithreading. It forms a small part of a larger system for large-scale particle simulation using Unity's ECS system currently under development."
      :technologyList="[LANGS.C_SHARP, ARCHITECTURE.MULTITHREADING, OTHER.ECS, OTHER.SHADER_GRAPH]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://github.com/Adrian-Sz1/SteamScraper"
      dateRange="2024 - 2025"
      header="Steam Scraper"
      subHeader="Personal Project"
      desc="Steam User Scraper (SUS) is a GUI based program designed to scrape a user's publicly available profile data, game stats and inventory for data visualization or data tracking. It primarily communicates with Steam's Web API which requires a user of SUS to posses a valid Steam API key and consequently a Steam account to gather information. It does not store any sensitive data (usernames, passwords etc.), except the Steam API key which is exclusively stored on the client machine and used for communicating with the Steam's Web API. Allows users to export the scraped data as JSON, YAML or CSV."
      :technologyList="[LANGS.PYTHON, FRAMEWORKS.PYSIDE, ARCHITECTURE.MVVM, DEVOPS_TOOLS.CI, OTHER.STEAM_API]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://gist.github.com/Adrian-Sz1/06ca44d57d83afe2ee0d21bb30977e08"
      dateRange="2024"
      header="Transaxio"
      subHeader="Personal Project"
      desc="Some info about the project"
      :technologyList="[LANGS.JAVA, DEVOPS_TOOLS.MAVEN, FRAMEWORKS.SPRING_BOOT, ARCHITECTURE.MICROSERVICES, MONITORING.GRAFANA, DEVOPS_TOOLS.NGINX, MONITORING.PROMETHEUS]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://gist.github.com/Adrian-Sz1/06ca44d57d83afe2ee0d21bb30977e08"
      dateRange="2023 - 2024"
      header="NI Sports Forum"
      subHeader="University Project"
      desc="An interactive website for displaying all registered sport clubs in Northern Ireland. Using Google Maps API to locate and provide information about the places. The website features an admin panel which allows for public requests to add new clubs and information updates that can be investigated by the administrators and realised. Furthermore, it allows for customization of club pin colours, and icons."
      :technologyList="[LANGS.C_SHARP, FRAMEWORKS.ASP_NET_MVC, FRAMEWORKS.REACT, BUILD_TOOLS.VITE, DEVOPS_TOOLS.CI, DATABASES.SQL_SERVER, OTHER.NODE_JS, OTHER.GOOGLE_MAPS_API]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://gist.github.com/Adrian-Sz1/06ca44d57d83afe2ee0d21bb30977e08"
      dateRange="2021"
      header="Command Line MP3 Player"
      subHeader="University Project"
      desc="Some info about the project"
      :technologyList="[LANGS.JAVA]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://gist.github.com/Adrian-Sz1/06ca44d57d83afe2ee0d21bb30977e08"
      dateRange="2019"
      header="Rocket League Replay Parser"
      subHeader="Personal Project"
      desc="Replay parser for a popular multiplayer game to extract match scores, player points and statistics like goals, assists or saves. The parsed data can be exported as JSON, CSV, YAML or plain text for users to use."
      :technologyList="[LANGS.PYTHON, OTHER.JSON]"
      />
    </li>
  </ol>
</template>

<style scoped>
</style>