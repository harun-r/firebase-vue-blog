<script>
export default {
  name: "AppHeadings",
  props: {
    text: null,
    type: {
      type: String,
      default: ''
    },
    headingClass: null,
  },
  computed: {
    headingType() {
      if (this.type === 'x-small') {
        return ''
      }
      if (this.type === 'small') {
        return ''
      }
      if (this.type === 'medium') {
        return ''
      }
      if (this.type === 'large') {
        return ''
      }
      if (this.type === 'x-large') {
        return ''
      }
    }
  }
}
</script>

<template>
  <h3 class="title" :class="[headingType, headingClass]">
    {{ text }}
  </h3>
</template>

<style scoped>

</style>