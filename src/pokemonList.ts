const pokemonArr: any[] = [];

function getPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        pokemonArr.push(data.results[i]);
      }
    });
  return pokemonArr;
}

function getDetailPokemon(params: string) {
  fetch('https://pokeapi.co/api/v2/pokemon/'.concat(params))
    .then((response) => response.json())
    .then((data) => {
      for (const k in data) {
        pokemonArr.push(data[k]);
      }
    });
  return pokemonArr;
}

export { getPokemon, getDetailPokemon };
