import type { NextPage } from "next";
import MainText from "../components/main-text";
import Documents from "../components/documents"

const Landing: NextPage = () => {
    return (
        <>
            <MainText></MainText>
            <Documents></Documents>
        </>
    );
}
export default Landing;