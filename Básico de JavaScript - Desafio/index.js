import { pokemons } from "./data.js";

export const typesLibrary = {
  grass: "Planta",
  poison: "Veneno",
  fire: "Fogo",
  flying: "Voador",
  water: "Agua",
  bug: "Inseto",
  normal: "Normal",
  electric: "Eletrico",
  ground: "Terra",
  fairy: "Fada",
  fighting: "Lutador",
  psychic: "Psiquico",
  rock: "Pedra",
  steel: "Metal",
  ice: "Gelo",
  ghost: "Fantasma",
};

const getAllTypes = () => {
  const allTypes = [];
  pokemons.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!allTypes.includes(type)) {
        allTypes.push(type);
      }
    });
  });
  console.log(allTypes);
  return allTypes;
};
const findPokemonByName = (name) =>
  pokemons.find((pokemon) => pokemon.name === name);

const findPokemonByType = (type) =>
  pokemons.filter((pokemon) => pokemon.type.includes(type));

const translatePokemonTypes = () =>
  pokemons.map((pokemon) => ({
    ...pokemon,
    type: (pokemon.type = pokemon.type.map((type) => typesLibrary[type])),
  }));

console.log(translatePokemonTypes());
