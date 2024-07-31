import { getManyPokemonByID, insertPokemon } from "./pokemonService";
import { fetchPokeapiPokemon } from "./pokeapiService";
import { IPokemonData } from "../types/IPokemon";

const regions = {
  Kanto: [1, 4, 7],
  Johto: [152, 155, 158],
  Hoenn: [252, 255, 258],
  Sinnoh: [387, 390, 393],
  Unova: [495, 498, 501],
  Kalos: [650, 653, 656],
  Alola: [722, 725, 728],
  Galar: [810, 813, 816],
  Paldea: [906, 909, 912],
};

type RegionData = {
  region: string;
  pokemon: IPokemonData[];
};

function sortStarters(pokemonData: IPokemonData[]): RegionData[] {
  const sortedData: RegionData[] = [];

  Object.entries(regions).forEach(([region, ids]) => {
    const regionPokemon = pokemonData.filter((pokemon) =>
      ids.includes(pokemon.id)
    );
    sortedData.push({
      region,
      pokemon: regionPokemon,
    });
  });

  return sortedData;
}

export const getStarters = async (): Promise<RegionData[]> => {
  const allStarterIds = Object.values(regions).flat();
  const starterData = await getManyPokemonByID(allStarterIds);

  const receivedIds = starterData.map((p) => p.id);
  const missingIds = allStarterIds.filter((id) => !receivedIds.includes(id));

  const missingPokemonPromises = missingIds.map((id) =>
    fetchPokeapiPokemon(id)
  );
  const missingPokemonData = await Promise.all(missingPokemonPromises);

  const combinedData = [...starterData, ...missingPokemonData];

  await insertPokemon(combinedData.filter((p) => missingIds.includes(p.id)));

  const sortedStarters = sortStarters(combinedData);

  return sortedStarters;
};
