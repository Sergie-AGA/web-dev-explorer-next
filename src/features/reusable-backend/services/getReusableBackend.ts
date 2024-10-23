import { supabase } from "@/lib/supabaseClient";

export const getReusableBackend = async () => {
  const response = await supabase.from("Reusable Backend").select();
  console.log(
    "%c Loggedd!",
    "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
  );
  console.log(response);
  if (response.error) {
    return [];
  }
  return response.data;
};
