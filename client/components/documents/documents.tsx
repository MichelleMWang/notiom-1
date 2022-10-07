import  { Center, Grid } from "@chakra-ui/react";
import Document from "./document"
import AddButton from "../add_button";


const Documents = () => {
    const text = ["Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur"]
    const documentList:JSX.Element[] = [<AddButton></AddButton>] 
    text.forEach((words) => {
        documentList.push(<Document text = {words}></Document>)
    }) 

    return (
        <Center mt="150" bg="white" pb="70" pt="10">
            <Grid templateColumns='repeat(6, 1fr)'>
                {documentList}
            </Grid>
        </Center>
    ); 
}
export default Documents 