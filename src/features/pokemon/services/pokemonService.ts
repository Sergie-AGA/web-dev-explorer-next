import {
  getAll,
  getSingleByValue,
  getManyByValue,
} from "@/services/supabase/supabase";

// Get Single by ID
export const getSinglePokemonByID = async (id: number) => {
  return getSingleByValue("pokemon", "id", id);
};
// Get many by ID
export const getManyPokemonByID = async (ids: number[]) => {
  return getManyByValue("pokemon", "id", ids);
};
