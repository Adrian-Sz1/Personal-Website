<script setup>
import ContentBox from './ContentBox.vue';
import { TECHNOLOGIES as T} from './technologies';
const { LANGS, FRAMEWORKS, BUILD_TOOLS, DATABASES, DEVOPS_TOOLS, MONITORING, ARCHITECTURE ,OTHER } = T;
</script>

<template>
  <ol>
    <li>
      <ContentBox
      urlLink="https://github.com/Adrian-Sz1/Personal-Website"
      dateRange="2025 - Present"
      header="Personal Portfolio Website"
      subHeader="Personal Project"
      desc="Source code for my website. I use it for showcasing my projects, CV and other relevant information about myself. It is built with Vue3 and Vite as a Single Page Application (SPA), the site is served by Nginx and hosted on Google Cloud Run. The deployment process is automated using a CI/CD pipeline managed with GitHub Actions but also using Google Cloud Run triggers for automatic deployment."
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
      header="Unity Planetary Mesh Generator Tool"
      subHeader="Personal Project"
      desc="A Unity-based tool for generating 3D planetary meshes for procedural terrain generation and biomes using simplex noise functions and multithreading. It's part of a larger system currently in development focused on large-scale, CPU-based particle simulation leveraging Unity's Entity Component System (ECS). The project isn't available on Github at the moment as it was created on Unity's in-house source control(previously Plastic SCM). This is a recent project that steps outside traditional full-stack development and instead explores the realms of physics simulations, procedural generation, and performance optimization. It was heavily inspired by Sebastian Lague's excellent series on fluid simulations."
      :technologyList="[LANGS.C_SHARP, ARCHITECTURE.MULTITHREADING, OTHER.ECS, OTHER.SHADER_GRAPH]"
      />
    </li>
    <li>
      <ContentBox
      urlLink="https://github.com/Adrian-Sz1/SteamScraper"
      dateRange="2024 - 2025"
      header="Steam Scraper"
      subHeader="Personal Project"
      desc="Steam User Scraper (SUS) is a Python GUI-based tool, distributed as an executable file downloaded by users. It is designed to scrape publicly available profile data, game stats, inventory and market information(in development) from Steam for data visualization and tracking purposes. The program communicates with Steam's Web API, requiring users to provide a valid Steam API key for gathering the information. SUS does not store any sensitive data, such as usernames or passwords; it only stores the API key locally on the client machine for API communication. Users can export the scraped data in JSON, YAML, or CSV formats. This project marks one of my first implementations of the MVVM architecture pattern and public REST API usage. It is still under development albeit paused for the time being, with plans for additional features in the future."
      :technologyList="[LANGS.PYTHON, FRAMEWORKS.PYSIDE, ARCHITECTURE.MVVM, DEVOPS_TOOLS.CI, OTHER.STEAM_API]"
      />
    </li>
    <!-- <li>
      <ContentBox
      urlLink="https://gist.github.com/Adrian-Sz1/06ca44d57d83afe2ee0d21bb30977e08"
      dateRange="2024"
      header="Transaxio"
      subHeader="Personal Project"
      desc="Some info about the project"
      :technologyList="[LANGS.JAVA, DEVOPS_TOOLS.MAVEN, FRAMEWORKS.SPRING_BOOT, ARCHITECTURE.MICROSERVICES, MONITORING.GRAFANA, DEVOPS_TOOLS.NGINX, MONITORING.PROMETHEUS]"
      />
    </li> -->
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
    <!-- <li>
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
    </li> -->
  </ol>
</template>

<style scoped>
</style>