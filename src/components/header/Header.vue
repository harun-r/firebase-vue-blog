<template>
  <div class="header">
    <app-logo/>
    <Navigation/>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import AppLogo from "@/components/common/app-logo/AppLogo.vue";

export default {
  name: "Header",
  components: {AppLogo, Navigation}
}
</script>
