<template>
  <NavBar />
  <ProjectHero />
  <FooterSection />
</template>

<script>
import NavBar from "../comps/NavBar.vue";
import FooterSection from "../comps/FooterSection.vue";
import ProjectHero from "../comps/ProjectHero.vue";
export default {
  name: "ProjectsView",
  components: {
    NavBar,
    FooterSection,
    ProjectHero,
  },
};
</script>
