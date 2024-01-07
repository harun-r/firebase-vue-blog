<script>
export default {
  name: "AppDesc",
  props: {
    text: null,
    type: {
      type: String,
      default: ''
    },
    descClass: null,
  },
  computed: {
    descType() {
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
  <p class="desc" :class="[descType, descClass]">
    {{ text }}
  </p>
</template>

<style scoped>

</style>