import { extendTheme } from "@chakra-ui/react"
import "@fontsource/dm-sans";

const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "DM Sans",
                color: "#545454"
            },
            sizes: {
                primary: {
                    fontSize: '4xl'
                }, 
                secondary: {
                    fontSize: '2xl'
                }
            }
        }
    }
})
export default theme; 
