import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home.vue";
import Blogs from "@/views/blogs/Blogs.vue";
import BlogPreview from "@/views/blogs/BlogPreview.vue";
import Login from "@/views/auth/login/Login.vue";
import Register from "@/views/auth/register/Register.vue";
import ForgotPassword from "@/views/auth/forget-password/ForgotPassword.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta:{
      title: 'Blogs'
    }
  },
  {
    path: '/blog/:id',
    name: 'viewBlog',
    component: BlogPreview,
    meta:{
      title: 'view Blog'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title: 'Register'
    }
  },
  {
    path: '/forget-pass',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta:{
      title: 'Forgot Password'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to,form,next) => {
  document.title = `${to.meta.title} | Fire blog`;
  next()
})
export default router
