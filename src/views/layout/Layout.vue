<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "Layout",
  components: {Footer, Header}
}
</script>

<template>
  <div class="layout">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style scoped>

</style>