import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'add', component: () => import('pages/AddPage.vue') },
      {
        path: 'edit/:id',
        component: () => import('pages/EditPage.vue'),
        props: true,
      },
      { path: 'done', component: () => import('pages/DonePage.vue') },
      {
        path: 'pokemon',
        component: () => import('src/pages/PokemonIndex.vue'),
      },
      {
        path: 'pokemon/:name',
        component: () => import('pages/PokemonDetail.vue'),
        props: true,
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
