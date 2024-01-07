<template>
  <div class="footer">
    <div class="footer-item">
      <app-logo/>
      <app-social-profile/>
    </div>
    <div class="footer-item">
      <navigation/>
    </div>
    <div class="footer-item">
      <p> {{ copyright }} </p>
    </div>
  </div>
</template>

<script>
import AppLogo from "@/components/common/app-logo/AppLogo.vue";
import AppSocialProfile from "@/components/common/app-social-profile/AppSocialProfile.vue";
import Navigation from "@/components/navigation/Navigation.vue";

export default {
  name: "Footer",
  components: {Navigation, AppSocialProfile, AppLogo},
  data() {
    return {
      copyright: 'Copyright 2024 All Rights Reserved'
    }
  }
}
</script>
