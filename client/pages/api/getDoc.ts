import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from "../../supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const docs = await supabase.from("docs").select("*")
}