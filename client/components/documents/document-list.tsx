import  { Center, Grid } from "@chakra-ui/react";
import Document from "./document"
import AddButton from "../add_button";

type Text = {
    document: string[]
}
const DocumentList = (props: Text) => {
    const { document } = props
    const documentList:JSX.Element[] = [] 
    document.forEach((words) => {
        documentList.push(<Document text = {words}></Document>)
    }) 

    return (
        <>
            {documentList}
        </>
    ); 
}
export default DocumentList 