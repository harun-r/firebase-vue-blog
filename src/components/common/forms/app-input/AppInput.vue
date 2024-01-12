<script>
export default {
  name: "AppInput",
  emits: ['update:modelValue'],
  props: {
    modelValue: null,
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    errMsg: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  methods: {
    handleChange($event) {
      this.$emit('update:modelValue', $event.target.value);
    }
  }
}
</script>

<template>
  <div class="input">
    <label class="input-label" v-if="label">{{ label }}</label>
    <div class="input-inner w-full">
      <input
          class="w-full"
          :type="type"
          :placeholder="placeholder"
          :value="modelValue"
          @input="handleChange"
      >
      <span class="error" v-if="errMsg">{{ errMsg }}</span>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>