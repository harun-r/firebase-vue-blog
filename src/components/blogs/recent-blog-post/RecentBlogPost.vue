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
    return {
      blogPostsCards: [
        {
          blogID: '1',
          blogCoverPhoto: 'stock-1',
          blogTitle: 'Dynamic Page Titles With The Vue Router',
          blogDate: 'may 1, 2024'
        },
        {
          blogID: '2',
          blogCoverPhoto: 'stock-2',
          blogTitle: 'Dynamic Page Titles With The Vue Router',
          blogDate: 'may 1, 2024'
        },
        {
          blogID: '3',
          blogCoverPhoto: 'stock-3',
          blogTitle: 'Dynamic Page Titles With The Vue Router',
          blogDate: 'may 1, 2024'
        }
      ]
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