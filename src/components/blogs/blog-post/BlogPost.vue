<script>
import AppHeadings from "@/components/common/app-headings/AppHeadings.vue";
import AppImage from "@/components/common/app-image/AppImage.vue";
import AppDesc from "@/components/common/app-desc/AppDesc.vue";

export default {
  name: "BlogPost",
  components: {AppDesc, AppImage, AppHeadings},
  props: {
    posts: {
      type: Array,
    }
  }
}
</script>

<template>
  <div class="post" v-for="(post, index) in posts" :key="index">
    <div class="content">
      <div class="center">
        <app-headings v-if="post.welcomeScreen" :text="post.title"/>
        <app-headings v-else :text="post.title"/>
        <app-desc :text="post.blogPost"/>
        <router-link :class="'link'" v-if="post.welcomeScreen" :to="{name:'Auth'}">Login/Register</router-link>
        <router-link :class="'link'" v-else :to="{name:'Auth'}">View the post</router-link>
      </div>
    </div>
    <div class="cover">
      <app-image v-if="post.welcomeScreen" :image="post.photo"/>
      <app-image v-else :image="post.photo"/>
    </div>
  </div>
</template>
