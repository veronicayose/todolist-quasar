<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-mt-xl q-mb-md">Pokemon</h3>

    <!-- List of PokemonList -->
    <div class="q-mb-md">
      <base-button
        class="q-mr-md"
        color="primary"
        label="Previous"
        @click="toPrevious"
      />
      <base-button color="primary" label="Next" @click="toNext" />
    </div>

    <div class="row justify-evenly" style="width: 100%">
      <base-card
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        @click="$router.push('/pokemon/detail/' + pokemon.name)"
        class="row q-pa-sm q-my-sm q-mx-xs justify-evenly col-xs-3"
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
import BasePage from '../../components/BasePage.vue';
import BaseCard from '../../components/BaseCard.vue';
import BaseButton from '../../components/BaseButton.vue';
import { pokemonData, Pokemon } from 'src/pokemonList';
import { onMounted, ref } from 'vue';

let params = '0';
const pokemonList = ref<Pokemon[]>([]);
const { getPokemon } = pokemonData();

onMounted(async () => {
  pokemonList.value = await getPokemon(params!);
});

let numberParams = Number(params!);

async function toNext() {
  numberParams += 20;
  pokemonList.value = await getPokemon(numberParams.toString());
}

async function toPrevious() {
  numberParams += 20;
  pokemonList.value = await getPokemon(numberParams.toString());
}
</script>

<style></style>
