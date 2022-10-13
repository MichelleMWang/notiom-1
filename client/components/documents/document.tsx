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
    text: string
}
const Document = (props: peekText) => {
    const { text } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState("");
    const handleInputChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };
    const onSubmit = () => {
        onClose() 
    }

    return (
        <GridItem>
            <Button variant="document">
                <Text >
                    {text}
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