<template>
  <container container="home" type="full">
    <blog-post :posts="welcomeScreen"/>
    <blog-post :posts="posts"/>
  </container>
</template>
<script>
import Container from "@/views/layout/Container.vue";
import BlogPost from "@/components/blogs/blog-post/BlogPost.vue";

export default {
  name: "Home",
  components: {BlogPost, Container},
  data() {
    return {
      welcomeScreen: [
        {
          title: "Welcome!",
          blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
          welcomeScreen: true,
          photo: "coding",
        }
      ],
      posts: [
        {
          title: "DYNAMIC PAGE TITLES WITH THE VUE ROUTER!",
          blogPost: "In this video we take a look at creating",
          photo: "coding",
        },
        {
          title: "CSS TRANSFORM: SKEWY | CREATE A SLANTED/SKEWED DIV!",
          blogPost: "In this video, we will take a look at the t...",
          photo: "coding",
        }
      ]
    }
  }
}
</script>
