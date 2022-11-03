import { supabase } from "../../supabase"
const deleteDoc = async (id: number) => {
    const { data, error } = await supabase 
        .from("docs")
        .delete()
        .eq('id', id)
    if (error) throw error; 
}
export default deleteDoc 