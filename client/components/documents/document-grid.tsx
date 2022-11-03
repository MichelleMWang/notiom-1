import React from "react"; 
import { useEffect } from "react";
import { supabase } from "../../supabase"
import {
    Center, Grid, GridItem
} from "@chakra-ui/react";
import AddButton from "../add_button";
import Document from "./document"


const DocumentGrid = () => {
    const [fullDoc, setFullDoc] = React.useState([{
        id: 1, 
        user_id: 1, 
        title: "how to get away with murder", 
        body: "don't ask me",
        created: "02/03/2022 12:33:04" },
        {
            id: 2, 
            user_id: 1, 
            title: "test", 
            body: "haha test", 
            created: "03/02/2023 12:32:05" }
    ])

    useEffect(()=>{
        fetchDocs(); 
    }, []); 

    const fetchDocs = async () => {
        const { data, error } = await supabase 
            .from("docs")
            .select("*")
        if (error) throw error; 
        setFullDoc(data)
    }

    return (
        <>
            <Center mt="150" bg="white" pb="70" pt="10" backgroundColor="white" paddingBottom="230px">
                <Grid templateColumns='repeat(6, 1fr)'>
                    <AddButton fullDoc={fullDoc} setFullDoc={setFullDoc}></AddButton>
                    {fullDoc.map((doc) => {
                        return(
                            <GridItem key={doc.id}>
                                <Document text={doc.body} title={doc.title} id={doc.id} fullDoc={fullDoc} setFullDoc={setFullDoc}></Document>
                            </GridItem>
                        ); 
                    })} 
                </Grid>
            </Center>
        </>
    )
}

export default DocumentGrid 