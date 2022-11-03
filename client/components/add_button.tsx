import React from "react";
import addDoc from "../pages/api/createDoc";
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
    setFullDoc: any,
    fullDoc: any[]
}
const getCurrentDateString = () => {
    const date = new Date().getDate() //current date
    const month = new Date().getMonth() + 1 //current month
    const year = new Date().getFullYear() //current year
    const hours = new Date().getHours() //current hours
    const min = new Date().getMinutes() //current minutes
    const sec = new Date().getSeconds() //current seconds

    return date + '/' + month + '/' + year + '    ' +  hours + ':' + min + ':' + sec
}
const AddButton = ( props: documentText ) => {
    // opening and closing modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setFullDoc, fullDoc } = props 
    
    // state
    const [value, setValue] = React.useState("");
    const handleInputChange = (e: { target: { value: any; }; }) => {
       setValue(e.target.value);
    };

    const onSubmit = () => {
        const fullDocCopy = [...fullDoc]
        const time = getCurrentDateString() 
        const newDoc = {
            id: Math.round(Math.random() * 0xFF), 
            user_id: 3, 
            title: 'placeholdertitle', 
            body: value, 
            created: time
        }
        fullDocCopy.push(newDoc)
        setFullDoc(fullDocCopy)
        addDoc(newDoc)
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