<template>
  <div class="social-icons">
    <router-link v-for="(icon,index) in icons" :key="index" :to="{name: icon.url}">
      <app-svg-icons :icon="icon.name"/>
    </router-link>
  </div>
</template>

<script>
import AppSvgIcons from "@/components/common/app-svg-icons/AppSvgIcons.vue";

export default {
  name: "AppSocialProfile",
  components: {AppSvgIcons},
  data() {
    return {
      icons: [
        {name: 'facebook', url: ''},
        {name: 'twitter', url: ''},
        {name: 'linkedin', url: ''},
        {name: 'youtube', url: ''},
      ]
    }
  }
}
</script>
