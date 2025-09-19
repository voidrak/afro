import Welcome from '@/views/Welcome.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  // {
  //   path: '/portfolio/:id',
  //   name: 'PortfolioDetail',
  //   component: () => import('@/views/PortfolioDetailView.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});






export default router;
