import { extendTheme } from "@chakra-ui/react"
import "@fontsource/dm-sans";

const theme = extendTheme({
    textStyles: {
        bigtext: {
            color: "#545454",
            fontFamily: "DM Sans",
            fontSize: "40px",
            mt: "176px",
        },
        littletext: {
            color: "#545454",
            fontFamily: "DM Sans",
            fontSize: "12px",
            mt: "12px",
        },
    },
})
export default theme; 
