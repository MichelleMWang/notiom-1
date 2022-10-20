import React from "react";
import {
        Button, 
        Image,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
        useDisclosure,
        Textarea,
} from "@chakra-ui/react";

type documentText = {
    setDocumentText:  React.Dispatch<React.SetStateAction<string[]>>
    text: string[]
}

const AddButton = ( props: documentText ) => {
    // opening and closing modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setDocumentText, text } = props 
    
    // state
    const [value, setValue] = React.useState("");
    const handleInputChange = (e: { target: { value: any; }; }) => {
        setValue(e.target.value);
    };
    const onSubmit = () => {
        setDocumentText([...text, value])
        setValue('')
        onClose() 
    }

    return(
        <>
            <Button variant="addbutton" onClick={onOpen}>
                <Image src="add-button-image.svg" alt="image of document and plus sign"></Image>
            </Button>

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
        </>
    );
}
export default AddButton; 