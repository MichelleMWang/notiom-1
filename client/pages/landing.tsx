import type { NextPage } from "next";
import MainText from "../components/main-text";
import DocumentGrid from "../components/documents/document-grid";
import NavBar from "../components/navbar"

const Landing: NextPage = () => {
    return (
        <>
            <NavBar></NavBar>
            <MainText></MainText>
            <DocumentGrid></DocumentGrid>
        </>
    );
}
export default Landing;