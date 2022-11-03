
import { supabase } from "../../supabase";

const getDocs = async () => {
    const { data, error } = await supabase 
        .from("docs")
        .select("*")
    if (error) throw error; 
    return data 
}
export default getDocs 