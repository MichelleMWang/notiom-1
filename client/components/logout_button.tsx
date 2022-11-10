import { Button, Image } from "@chakra-ui/react";

const LogoutButton = () => {
    return(
        <Button variant="createbutton">
            <a href="/api/auth/logout">Logout</a>
        </Button>
    );
}
export default LogoutButton; 