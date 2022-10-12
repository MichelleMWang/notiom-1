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

const AddButton = () => {
    // opening and closing modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    // state
    const [value, setValue] = React.useState("");
    const handleInputChange = e => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    return(
        <>
            <Button variant="addbutton" onClick={onOpen}>
                <Image src="add-button-image.svg"></Image>
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
                        <Button variant="createbutton" type="submit">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
export default AddButton; 