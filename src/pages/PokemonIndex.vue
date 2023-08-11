<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-my-xl">Pokemon</h3>

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

    <div class="row justify-evenly">
      <base-card
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        @click="$router.push('/pokemon/detail/' + pokemon.name)"
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
import BaseButton from '../components/BaseButton.vue';
import { getPokemon, Pokemon } from 'src/pokemonList';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({ offset: String });
// eslint-disable-next-line vue/no-setup-props-destructure
let params = props.offset;
const router = useRouter();

if (params === undefined) {
  params = '0';
}

const pokemonList = ref<Pokemon[]>([]);

onMounted(async () => {
  pokemonList.value = await getPokemon(params!);
});

const numberParams = Number(params!);

let nextPage = ref((numberParams + 20).toString());
let previousPage = ref((numberParams - 20).toString());

if (params === '1280') {
  nextPage.value = '1280';
}

if (params === '0') {
  previousPage.value = '0';
}

function toNext() {
  router.push('/pokemon/'.concat(nextPage.value)).then(() => router.go(0));
}
function toPrevious() {
  router.push('/pokemon/'.concat(previousPage.value)).then(() => router.go(0));
}

console.log(pokemonList);
</script>
