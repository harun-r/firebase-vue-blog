<template>
  <div class="blog-card-wrap">
    <div class="container">
      <h3>View More Recent Blogs</h3>
      <div class="blog-cards">
        <blog-card :post="post" v-for="(post, index) in blogPostsCards" :key="index"/>
      </div>
    </div>
  </div>
</template>
<script>
import BlogCard from "@/components/blogs/blog-card/BlogCard.vue";

export default {
  name: "RecentBlogPost",
  components: {BlogCard},
  data() {
    return{
      blogPostsCards: []
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

</style>