import { supabase } from "../../supabase";

const updateDocs = async (id: number, value: string) => {
    const { data, error } = await supabase 
        .from("docs")
        .update({body: value})
        .eq('id', id)
    if (error) throw error; 
}
export default updateDocs