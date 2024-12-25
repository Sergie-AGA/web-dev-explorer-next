import {
  getAll,
  getSingleByValue,
  getManyByValue,
  postMany,
} from "@/services/supabase/supabase";
import { IPokemonData } from "../types/IPokemon";

// Get Single by ID
export const getSinglePokemonByID = async (id: number) => {
  return getSingleByValue("pokemon", "id", id);
};
// Get many by ID
export const getManyPokemonByID = async (ids: number[]) => {
  return getManyByValue("pokemon", "id", ids);
};

// Insert multiple Pokémon
export const insertPokemon = async (pokemonData: IPokemonData[]) => {
  return postMany("pokemon", pokemonData);
};
