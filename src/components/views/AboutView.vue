<template>
  <NavBar />
  <AboutHero />
  <FooterSection />
</template>
<script>
import AboutHero from "../comps/AboutHero.vue";
import NavBar from "../comps/NavBar.vue";
import FooterSection from "../comps/FooterSection.vue";

export default {
  name: "AboutView",
  components: { AboutHero, NavBar, FooterSection },
};
</script>
