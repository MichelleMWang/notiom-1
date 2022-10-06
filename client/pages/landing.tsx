import type { NextPage } from "next";
import MainText from "../components/main-text";
import Documents from "../components/documents"
import NavBar from "../components/navbar"

const Landing: NextPage = () => {
    return (
        <>
            <NavBar></NavBar>
            <MainText></MainText>
            <Documents></Documents>
        </>
    );
}
export default Landing;