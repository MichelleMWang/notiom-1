import type { NextPage } from "next";
import MainText from "../components/main-text";
import Documents from "../components/documents"
import Logo from "../components/logo"
import AddButton from "../components/create_button";
import CreateButton from "../components/create_button";
import { HStack } from "@chakra-ui/react";

const Landing: NextPage = () => {
    return (
        <>
            <HStack justifyContent="space-between" mr="10">
                <Logo></Logo>
                <CreateButton></CreateButton>
            </HStack>
            <MainText></MainText>
            <Documents></Documents>
        </>
    );
}
export default Landing;