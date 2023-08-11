import { ref } from 'vue';

export interface Pokemon {
  name: string;
  abilities: [];
  base_experience?: number;
  height?: number;
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  order?: number;
  weight?: number;
}

const pokemonArr = ref<Pokemon[]>([]);
// const pokemonPaginationArr = ref<PokemonPagination[]>([]);

// First Method

// async function getPokemon() {
//   const response = await fetch(
//     'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
//   );
//   const data = await response.json();
//   console.log(data);
//   pokemonArr.value = data.results;
//   console.log(pokemonArr.value);
//   return pokemonArr.value;
// }

async function getPokemon(params: string) {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset='.concat(params, '&limit=20')
  );
  const data = await response.json();
  pokemonArr.value = data.results;
  return pokemonArr.value;
}

// Second Method
// function getPokemonPromise() {
//   return new Promise((resolve, reject) => {
//     fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
//       .then((response) => response.json())
//       .then((data) => {
//         pokemonArr.value = data.results;
//         resolve(pokemonArr.value);
//       });
//   });
// }

async function getDetailPokemon(params: string) {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/'.concat(params)
  );
  const data = await response.json();
  pokemonArr.value = data;
  console.log(pokemonArr.value);
  return pokemonArr.value;
}

export { getPokemon, getDetailPokemon };
