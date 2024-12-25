import { IPokemonData } from "../types/IPokemon";

const fetchPokemonData = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  return response.json();
};

const fetchPokemonSpeciesData = async (id: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon species data");
  }
  return response.json();
};

export const fetchPokeapiPokemon = async (
  id: number
): Promise<IPokemonData | Error> => {
  try {
    const [pokemonData, speciesData] = await Promise.all([
      fetchPokemonData(id),
      fetchPokemonSpeciesData(id),
    ]);

    return {
      id: pokemonData.id,
      name: pokemonData.name,
      base_experience: pokemonData.base_experience,
      capture_rate: speciesData.capture_rate,
      front_image: pokemonData.sprites.front_default,
      back_image: pokemonData.sprites.back_default,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};
