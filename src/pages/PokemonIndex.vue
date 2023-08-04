<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-my-xl">Pokemon</h3>

    <!-- List of PokemonList -->
    <div class="row justify-evenly">
      <base-card
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        @click="$router.push('/pokemon/' + pokemon.name)"
        style="width: 30%; height: 25%"
        class="row q-pa-md q-my-sm"
      >
        <div class="col-8">
          <p class="q-ma-xs text-subtitle2">Nama Pokemon:</p>
          <h5 class="q-ma-xs">{{ pokemon.name }}</h5>
        </div>
      </base-card>
    </div>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from '../components/BasePage.vue';
import BaseCard from '../components/BaseCard.vue';
import { getPokemon } from 'src/pokemonList';

const pokemonList = getPokemon();
</script>
