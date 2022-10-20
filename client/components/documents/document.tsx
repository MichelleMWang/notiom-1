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

type peekText = {
    text: string, 
    document: string[], 
    setDocumentText: any 
}
const Document = (props: peekText) => {
    const { text, document, setDocumentText } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState(text);
    const handleInputChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };
    const onSubmit = () => {
        const newDoc = [...document]; 
        newDoc[document.indexOf(text)] = value 
        setDocumentText(newDoc)

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