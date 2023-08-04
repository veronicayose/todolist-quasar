<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-my-xl">Pokemon Detail</h3>
    <base-button
      color="primary"
      label="Back"
      @click="$router.push('/pokemon')"
    />
    <base-card style="width: 50%" class="q-py-md q-px-lg q-my-md">
      <div class="row q-my-xs">
        <h6 class="col-6 q-my-xs">Pokemon Name:</h6>
        <h6 class="col-6 q-my-xs">{{ pokemonDetail[10] }}</h6>
      </div>

      <div class="row q-my-xs">
        <h6 class="col-6 q-my-xs">Base Experience:</h6>
        <h6 class="col-6 q-my-xs">{{ pokemonDetail[1] }}</h6>
      </div>

      <div class="row q-my-xs">
        <h6 class="col-6 q-my-xs">Height:</h6>
        <h6 class="col-6 q-my-xs">{{ pokemonDetail[4] }}</h6>
      </div>

      <div class="row q-my-xs">
        <h6 class="col-6 q-my-xs">Order:</h6>
        <h6 class="col-6 q-my-xs">{{ pokemonDetail[11] }}</h6>
      </div>

      <div class="row q-my-xs">
        <h6 class="col-6 q-my-xs">Weight:</h6>
        <h6 class="col-6 q-my-xs">{{ pokemonDetail[17] }}</h6>
      </div>

      <div class="row q-my-xs">
        <h6 class="col-6 q-my-xs">Abilities:</h6>
        <h6 class="col-6 q-my-xs">{{ pokemonAbility() }}</h6>
        <!-- <div v-for="pokemon in pokemonDetail[0]" :key="pokemon.ability">
          <h6 class="q-my-xs">{{ pokemon.ability.name }},</h6>
        </div> -->
        <!-- <h6 class="q-my-xs">{{ pokemonAbility }}</h6> -->
      </div>
    </base-card>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from 'src/components/BasePage.vue';
import BaseCard from 'src/components/BaseCard.vue';
import BaseButton from 'src/components/BaseButton.vue';
import { getDetailPokemon } from 'src/pokemonList';

const props = defineProps({ name: String });
// eslint-disable-next-line vue/no-setup-props-destructure
const params = props.name;

// eslint-disable-next-line vue/return-in-computed-property
function pokemonAbility() {
  let pokemonDetailAbility = '';
  for (let i = 0; i < pokemonDetail[0].length; i++) {
    pokemonDetailAbility = pokemonDetailAbility.concat(
      pokemonDetail[0][i].ability.name
    );
    if (i !== pokemonDetail[0].length - 1) {
      pokemonDetailAbility = pokemonDetailAbility.concat(', ');
    }
  }
  return pokemonDetailAbility;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const pokemonDetail = getDetailPokemon(params!);
</script>
