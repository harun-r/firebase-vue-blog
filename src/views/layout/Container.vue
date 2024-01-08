<script>
export default {
  name: "Container",
  props: {
    container: null,
    type: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    layoutType() {
      if (this.type === 'center') {
        return 'max-w-[1200px] mx-auto'
      }
      if (this.type === 'full') {
        return 'w-100'
      }
    }
  }
}
</script>

<template>
  <div class="page-wrap" :class="[container, layoutType]">
    <slot/>
  </div>
</template>

<style scoped>

</style>