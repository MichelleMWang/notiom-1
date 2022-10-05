import  { Grid } from "@chakra-ui/react";
import Document from "./document"


const Documents = () => {
    const text = ["Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur"]
    const documentList:JSX.Element[] = [] 
    text.forEach((words) => {
        documentList.push(<Document text = {words}></Document>)
    }) 
    return (
        <Grid>
            {documentList}
        </Grid>
    ); 
}
export default Documents 