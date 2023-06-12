import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Auth/LoginView.vue'),
      },
    ],
  },

  {
    path: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/Home/HomeView.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
