<template>
  <NavBar />
  <CopyBreakdownVue />
  <FooterSection />
</template>

<script>
import NavBar from "../../comps/NavBar.vue";
import FooterSection from "../../comps/FooterSection.vue";
import CopyBreakdownVue from "@/components/comps/CopyBreakdown.vue";
export default {
  name: "CopyProject",
  components: {
    NavBar,
    FooterSection,
    CopyBreakdownVue,
  },
};
</script>
