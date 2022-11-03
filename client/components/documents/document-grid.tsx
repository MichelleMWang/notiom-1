import React from "react"; 
import { useEffect } from "react";
import {
    Center, Grid, GridItem
} from "@chakra-ui/react";
import AddButton from "../add_button";
import Document from "./document"
import getDocs from "../../pages/api/getDoc";


const DocumentGrid = () => {
    const [fullDoc, setFullDoc] = React.useState([{
        id: 1, 
        user_id: 1, 
        title: "placeholdertitle", 
        body: "placeholderbody",
        created: "02/03/2022 12:33:04" }])

    useEffect(()=>{
        getDocs().then(function (response) 
        {setFullDoc(response)}); 
    }, []); 

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