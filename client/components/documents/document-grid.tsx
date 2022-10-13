import React from "react"; 
import {
    Center, Grid
} from "@chakra-ui/react";

import DocumentList from "./document-list";
import AddButton from "../add_button";

const DocumentGrid = () => {
    const [documentText, setDocumentText] = React.useState(["Lorem ipsum"])
    return (
        <>
            <Center mt="150" bg="white" pb="70" pt="10">
                <Grid templateColumns='repeat(6, 1fr)'>
                    <AddButton setDocumentText={setDocumentText} text={documentText}></AddButton>
                    <DocumentList document={documentText}></DocumentList>
                </Grid>
            </Center>
        </>
    )
}

export default DocumentGrid 