<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create Your FireBlog Account</h2>
      <div class="inputs">
        <app-input
            placeholder="First Name" v-model="firstName"
        />
        <app-input
            placeholder="Last Name" v-model="lastName"
        />
        <app-input
            placeholder="Username" v-model="username"
        />
        <app-input
            placeholder="Email" v-model="email"
        />
        <app-input
            placeholder="Password" v-model="password" type="password"
        />

        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import AppInput from "@/components/common/forms/app-input/AppInput.vue";

export default {
  name: "Register",
  components: {AppInput},
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    register() {

    }
  }
}
</script>


<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>