import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Parallels - Home',
    },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Parallels - About',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: 'Parallels - Blog',
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/Blog.vue'),
  },
  {
    path: '/blog/:postId',
    name: 'blog-post',
    component: () => import(/* webpackChunkName: "about" */ '../components/Article.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
