import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // Path for index and pokemons
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
      {
        path: 'pokemon',
        component: () => import('src/pages/Pokemon/IndexPage.vue'),
      },
      {
        path: 'pokemon/detail/:name',
        component: () => import('src/pages/Pokemon/DetailPage.vue'),
        props: true,
      },
    ],
  },

  // Path for todos
  {
    path: '/todo/',
    component: () => import('layouts/TodoLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/TodoList/IndexPage.vue'),
      },
      {
        path: 'add',
        component: () => import('src/pages/TodoList/AddPage.vue'),
      },
      {
        path: 'edit/:id',
        component: () => import('src/pages/TodoList/EditPage.vue'),
        props: true,
      },
      {
        path: 'done',
        component: () => import('src/pages/TodoList/DonePage.vue'),
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
