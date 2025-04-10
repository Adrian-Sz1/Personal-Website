<script setup>
import ContentBox from './ContentBox.vue'
import { TECHNOLOGIES as T } from './technologies'
const { LANGS, FRAMEWORKS, DATABASES, DEVOPS_TOOLS, TESTING } = T
</script>

<template>
  <ol>
    <li>
      <ContentBox
        urlLink="https://nanthealth.com/"
        dateRange="Jun 2022 - Jun 2023"
        header="Software Engineer Intern | NantHealth"
        subHeader="Associate Software Engineer"
        desc="Involved end-to-end software development as a fullstack agile engineer. The primary duties included planning, developing, testing, deploying, and supporting NaviNet and its core systems, utilizing C# ASP.NET MVC, JavaScript, and Microsoft SQL Server. Co-developed a mock JWT client data debugging tool during a company-wide 'Spark Day' innovation event, in collaboration with the team lead. The tool received strong feedback from developers and QA, leading to project-wide adoption. It significantly improved client data integrity testing by accelerating validation and testing of data manipulation functions, reducing related defects. Collaborated with international teams in the US and India forming an essential part of the role and for product delivery and issue resolution."
        :technologyList="[
          LANGS.C_SHARP,
          LANGS.JAVASCRIPT,
          LANGS.HTML_CSS,
          FRAMEWORKS.ASP_NET_MVC,
          FRAMEWORKS.KNOCKOUT_JS,
          DATABASES.SQL_SERVER,
          DEVOPS_TOOLS.AGILE,
          DEVOPS_TOOLS.CI_CD,
          DEVOPS_TOOLS.JIRA,
          DEVOPS_TOOLS.GITLAB,
          DEVOPS_TOOLS.TEAM_CITY,
          TESTING.SELENIUM,
        ]"
      />
    </li>
  </ol>
</template>

<style scoped></style>
