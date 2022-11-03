import { Button, Text, GridItem, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Textarea, } from "@chakra-ui/react";
import React from "react"
import { supabase } from "../../supabase"

type peekText = {
    text: string, 
    title: string,
    id: number,
    fullDoc: any[], 
    setFullDoc: any
}
/*const getCurrentDateString = () => {
    const date = new Date().getDate() //current date
    const month = new Date().getMonth() + 1 //current month
    const year = new Date().getFullYear() //current year
    const hours = new Date().getHours() //current hours
    const min = new Date().getMinutes() //current minutes
    const sec = new Date().getSeconds() //current seconds

    return date + '/' + month + '/' + year + '    ' +  hours + ':' + min + ':' + sec
} */
const Document = (props: peekText) => {
    const { text, title, id, fullDoc, setFullDoc } = props

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState(text);
    

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    const updateDocs = async () => {
        const { data, error } = await supabase 
            .from("docs")
            .update({body: value})
            .eq('id', id)
        if (error) throw error; 
    }
    const onSubmit = () => { 
        const fullDocCopy = [...fullDoc]
        fullDocCopy.forEach((doc) => {
            if (doc.id == id) {
                doc.body = value 
            }
        })
        setFullDoc(fullDocCopy)
        updateDocs()
        onClose() 
    }

    return (
        <GridItem>
            <Button variant="document" onClick={onOpen}>
                <Text >
                    {text.length > 40
                    ? text.substring(0, 37) + '....'
                    : text }
                </Text>

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Document</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Textarea value={value} onChange={handleInputChange} variant="unstyled" placeholder="type here! :P"></Textarea>
                    </ModalBody>   

                    <ModalFooter>
                        <Button variant="createbutton" type="submit" onClick={onSubmit}>Save</Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </Button>
        </GridItem>
    ); 
}
export default Document 