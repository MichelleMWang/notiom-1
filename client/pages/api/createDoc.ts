import { supabase } from "../../supabase";    

const addDoc = async (newDoc: { id: number; user_id: number; title: string; body: string; created: string; }) => {
    const { data, error } = await supabase 
        .from("docs")
        .insert(newDoc)
    if (error) throw error; 
}
export default addDoc