<script>
export default {
  name: "AppImage",
  props: {
    image: null
  },
  data(){
    return{
      img: new URL(`/src/assets/images/posts/${this.image}.jpg`, import.meta.url)
    }
  },
}
</script>

<template>
  <img :src="img" alt="img" />
</template>
