import { Image, Heading, HStack, Button } from "@chakra-ui/react"; 
import Logo from "../components/logo"
import CreateButton from "../components/create_button"
import LoginButton from "./login_button";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" mr="10">
            <Logo></Logo>
            <HStack>
            <CreateButton></CreateButton>
            <LoginButton></LoginButton>
            </HStack>
        </HStack>
    ); 
}

export default NavBar