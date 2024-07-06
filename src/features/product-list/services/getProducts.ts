import { supabase } from "@/lib/supabaseClient";

export const getProducts = async () => {
    const response = await supabase.from("Product Listing POC").select();
    if (response.error) {
        return [];
    }
    return response.data;
};
