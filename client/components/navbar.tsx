import { Image, Heading, HStack, Button } from "@chakra-ui/react"; 
import Logo from "../components/logo"
import CreateButton from "../components/create_button"

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" mr="10">
            <Logo></Logo>
            <CreateButton></CreateButton>
        </HStack>
    ); 
}

export default NavBar