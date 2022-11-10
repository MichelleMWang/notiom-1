import { Image, Heading, HStack, Button } from "@chakra-ui/react"; 
import Logo from "../components/logo"
import CreateButton from "../components/create_button"
import LoginButton from "./login_button";
import LogoutButton from "./logout_button";
import { useUser } from "@auth0/nextjs-auth0";

const NavBar = () => {
    const { user } = useUser(); 
    return (
        <HStack justifyContent="space-between" mr="10">
            <Logo></Logo>
            <HStack>
                <CreateButton></CreateButton>
                { user ? (
                    <LogoutButton></LogoutButton>
                ) : (
                    <LoginButton></LoginButton>
                )}
                
                
            </HStack>
        </HStack>
    ); 
}

export default NavBar