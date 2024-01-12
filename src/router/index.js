import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home.vue";
import Blogs from "@/views/blogs/Blogs.vue";
import BlogPreview from "@/views/blogs/BlogPreview.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/:id',
    name: 'viewBlog',
    component: BlogPreview
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
