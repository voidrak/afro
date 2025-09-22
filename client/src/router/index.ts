import Welcome from '@/views/Welcome.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Auth/RegisterView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/LoginView.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/User/Home.vue'),
  },
  {
    path: '/forget-password',
    name: 'ForgotPassword',
    component: () => import('@/views/Auth/ForgetPassword.vue'),
  },
  {
    path: '/girl-details',
    name: 'GirlDetails',
    component: () => import('@/views/User/GirlDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});






export default router;
