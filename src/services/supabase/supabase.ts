import { supabase } from "@/lib/supabaseClient";

const tables: Record<string, string> = {
  pokemon: "Pokemon List",
};

// Get All
export const getAll = async (key: string) => {
  const response = await supabase.from(tables[key]).select();

  if (response.error) {
    return [];
  }
  return response.data;
};

// Get Single
export const getSingleByValue = async (
  key: string,
  column: string,
  value: any
) => {
  const response = await supabase
    .from(tables[key])
    .select()
    .eq(column, value)
    .single();

  if (response.error) {
    console.error("Error fetching data:", response.error);
    return null;
  }
  return response.data;
};
