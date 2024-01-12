<template>
  <div class="navigation">
    <router-link
        v-for="(navigation, index) in  navigations"
        :key="index"
        :to="{name: navigation.route}">
      {{ navigation.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      navigations: [
        {name: 'Home', route: 'Home'},
        {name: 'Blogs', route: 'Blogs'},
        {name: 'Login / Register', route: 'Login'},
      ]
    }
  }
}
</script>
