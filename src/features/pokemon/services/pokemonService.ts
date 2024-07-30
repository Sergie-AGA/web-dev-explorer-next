import { getAll, getSingleByValue } from "@/services/supabase/supabase";

// Get Single by ID
export const getSinglePokemonByID = async (slug: number) => {
  return getSingleByValue("pokemon", "id", slug);
};
