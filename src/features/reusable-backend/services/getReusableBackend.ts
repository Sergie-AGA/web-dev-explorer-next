import { supabase } from "@/lib/supabaseClient";

export const getReusableBackend = async () => {
  const response = await supabase.from("Reusable Backend").select();

  if (response.error) {
    return [];
  }
  return response.data;
};
