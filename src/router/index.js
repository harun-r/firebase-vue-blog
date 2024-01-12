import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home.vue";
import Blogs from "@/views/blogs/Blogs.vue";

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
