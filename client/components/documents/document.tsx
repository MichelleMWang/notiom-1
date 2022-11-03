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
import updateDocs from "../../pages/api/updateDoc";
import deleteDoc from "../../pages/api/deleteDoc";
import React from "react"


type peekText = {
    text: string, 
    title: string,
    id: number,
    fullDoc: any[], 
    setFullDoc: any
}

const Document = (props: peekText) => {
    const { text, title, id, fullDoc, setFullDoc } = props

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState(text);
    

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };
    const onSubmit = () => { 
        const fullDocCopy = [...fullDoc]
        fullDocCopy.forEach((doc) => {
            if (doc.id == id) {
                doc.body = value 
            }
        })
        setFullDoc(fullDocCopy)
        updateDocs(id, value)
        onClose() 
    }
    const onDelete = () => {
        deleteDoc(id)
        const fullDocCopy = [...fullDoc]
        for (let i = 0; i < fullDocCopy.length; i++){
            if (fullDocCopy[i].id == id){
                fullDocCopy.splice(i, 1)
                break; 
            }
        }
        setFullDoc(fullDocCopy)
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
                        <Button onClick={onDelete}>Delete Document</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </Button>
        </GridItem>
    ); 
}
export default Document 