<template>
  <div class="layout">
    <Header v-if="!navigation"/>
    <router-view/>
    <Footer v-if="!navigation"/>
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "Layout",
  components: {Footer, Header},
  data() {
    return {
      navigation: null,
    }
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
}
</script>


<style scoped>

</style>