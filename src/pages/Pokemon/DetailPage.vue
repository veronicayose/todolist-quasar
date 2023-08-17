<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-mt-xl q-mb-md">Pokemon Detail</h3>
    <base-button color="primary" label="Back" @click="$router.back()" />
    <base-card style="width: 50%" class="q-py-md q-px-lg q-my-md">
      <q-card-section class="q-pa-none row justify-center">
        <q-img :src="pokemonImage[0]" alt="Pokemon Image" style="width: 50%" />
        <q-img :src="pokemonImage[1]" alt="Pokemon Image" style="width: 50%" />
      </q-card-section>
      <q-card-section
        ><div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Pokemon Name</h6>
          <h6 class="col-6 q-my-xs">{{ pokemonDetail.name }}</h6>
        </div>

        <!-- <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Pokemon Sprites</h6>
          <h6 class="col-6 q-my-xs">{{ pokemonDetail.sprites }}</h6>
        </div>

        <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Pokemon img</h6>
          <h6 class="col-6 q-my-xs">
            {{ pokemonDetail.sprites.back_default }}
          </h6>
          <q-img
            :src="pokemonDetail.sprites.back_default"
            alt="Pokemon Image"
            style="width: 50%"
          />
        </div>-->

        <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Base Experience</h6>
          <h6 class="col-6 q-my-xs">{{ pokemonDetail.base_experience }}</h6>
        </div>

        <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Height</h6>
          <h6 class="col-6 q-my-xs">{{ pokemonDetail.height }}</h6>
        </div>

        <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Order</h6>
          <h6 class="col-6 q-my-xs">{{ pokemonDetail.order }}</h6>
        </div>

        <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Weight</h6>
          <h6 class="col-6 q-my-xs">{{ pokemonDetail.weight }}</h6>
        </div>

        <div class="row q-my-xs">
          <h6 class="col-6 q-my-xs">Abilities:</h6>
          <h6 class="q-my-xs">
            {{ pokemonDetail.abilities?.map((e) => e.ability.name).join(', ') }}
          </h6>
        </div>
      </q-card-section>
    </base-card>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from 'src/components/BasePage.vue';
import BaseCard from 'src/components/BaseCard.vue';
import BaseButton from 'src/components/BaseButton.vue';
import { getDetailPokemon, getPokemonImage } from 'src/pokemonList';

const props = defineProps({ name: String });
// eslint-disable-next-line vue/no-setup-props-destructure
const params = props.name;

import { Pokemon } from 'src/pokemonList';
import { onMounted, ref } from 'vue';

const pokemonDetail = ref<Pokemon[]>([]);
const pokemonImage = ref<string[]>([]);

onMounted(async () => {
  pokemonDetail.value = await getDetailPokemon(params!);
  pokemonImage.value = await getPokemonImage(params!);
});

console.log(pokemonDetail);
</script>
