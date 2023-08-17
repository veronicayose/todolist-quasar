<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <base-toolbar-title />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="q-mt-xl">
        <q-item v-for="data in menu" :key="data.id">
          <q-item-section>
            <q-btn
              flat
              class="text-h6 text-bold text-left"
              @click="$router.push(data.url).then(() => $router.go(0))"
              >{{ data.text }}
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import BaseToolbarTitle from '../components/BaseToolbarTitle.vue';

const menu = [
  {
    id: 1,
    url: '/todo',
    text: 'All Task',
  },
  {
    id: 2,
    url: '/todo/done',
    text: 'Done',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
