import { IPokemonData } from "../types/IPokemon";
import { getManyPokemonByID } from "../services/pokemonService";

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

export const sortStarters = (pokemonData: IPokemonData[]): RegionData[] => {
  const sortedData: RegionData[] = [];

  for (const [region, ids] of Object.entries(regions)) {
    const regionPokemon = pokemonData.filter((pokemon) =>
      ids.includes(pokemon.id)
    );
    sortedData.push({
      region,
      pokemon: regionPokemon,
    });
  }

  return sortedData;
};

export const getStarters = async (): Promise<RegionData[]> => {
  const allStarterIds = Object.values(regions).flat();
  const starterData = await getManyPokemonByID(allStarterIds);
  return sortStarters(starterData);
};
