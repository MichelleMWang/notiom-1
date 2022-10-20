import React from "react"; 
import {
    Center, Grid, GridItem
} from "@chakra-ui/react";
import AddButton from "../add_button";
import Document from "./document"

const DocumentGrid = () => {
    const [documentText, setDocumentText] = React.useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])
    return (
        <>
            <Center mt="150" bg="white" pb="70" pt="10" backgroundColor="white" paddingBottom="230px">
                <Grid templateColumns='repeat(6, 1fr)'>
                    <AddButton setDocumentText={setDocumentText} text={documentText}></AddButton>
                    {documentText.map((words) => {
                        return(
                            <GridItem key={words}>
                                <Document document={documentText} text={words} setDocumentText={setDocumentText}></Document>
                            </GridItem>
                        ); 
                    })} 
                </Grid>
            </Center>
        </>
    )
}

export default DocumentGrid 