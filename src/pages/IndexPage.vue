<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-my-xl">WELCOME!</h3>
    <!-- List of Undone Cards -->

    <div class="row justify-center" style="width: 100%">
      <base-card
        class="column q-pa-md q-mr-md items-center"
        style="width: 25%"
        @click="$router.push('/todo/')"
      >
        <img src="../assets/images/todolist.png" alt="todolist-image" />
        <h4 class="q-my-sm text-bold text-subtitle1">Todo Page</h4>
      </base-card>

      <!-- List of Done Cards -->
      <base-card
        class="column q-pa-md q-ml-md items-center"
        style="width: 25%"
        @click="$router.push('/pokemon')"
      >
        <img
          src="../assets/images/pikachu.png"
          alt="todolist-image"
          style="width: 75%"
        />
        <h4 class="q-my-sm text-bold text-subtitle1 align-center">
          Pokemon Page
        </h4>
      </base-card>
    </div>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from '../components/BasePage.vue';
import BaseCard from '../components/BaseCard.vue';
</script>
