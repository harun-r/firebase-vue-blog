<template>
  <div v-if="!user" class="updates">
    <div class="container">
      <h2>never miss a post. Register for your free account today!</h2>
      <router-link class="router-button" to="#"> Register for FireBlogs
<!--        <Arrow class="arrow arrow-light"/>-->
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Updates",
  data () {
    return{
      user: false
    }
  }
}
</script>
<style lang="scss" scoped>
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>