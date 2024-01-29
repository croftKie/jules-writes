<template>
  <NavBar />
  <HeroSection />
  <ServicesSection />
  <KeyProjects />
  <IndustriesSection />
  <FooterSection />
</template>
<script>
import HeroSection from "../comps/HeroSection.vue";
import NavBar from "../comps/NavBar.vue";
import IndustriesSection from "../comps/IndustriesSection.vue";
import ServicesSection from "../comps/ServicesSection.vue";
import FooterSection from "../comps/FooterSection.vue";
import KeyProjects from "../comps/KeyProjects.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    HeroSection,
    IndustriesSection,
    ServicesSection,
    FooterSection,
    KeyProjects,
  },
};
</script>
