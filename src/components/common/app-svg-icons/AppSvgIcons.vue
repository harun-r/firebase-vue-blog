<script>
import FacebookIcon from "@/components/common/app-svg-icons/social-icons/FacebookIcon.vue";
import TwitterIcon from "@/components/common/app-svg-icons/social-icons/TwitterIcon.vue";
import LinkedinIcon from "@/components/common/app-svg-icons/social-icons/LinkedinIcon.vue";
import YoutubeIcon from "@/components/common/app-svg-icons/social-icons/YoutubeIcon.vue";

export default {
  name: "AppSvgIcons",
  props: {
    icon: null
  },
  components: {
    'facebook': FacebookIcon,
    'twitter': TwitterIcon,
    'linkedin': LinkedinIcon,
    'youtube': YoutubeIcon,
  }
}
</script>

<template>
  <component :is="icon"/>
</template>
