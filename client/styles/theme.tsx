import { extendTheme } from "@chakra-ui/react"
import "@fontsource/dm-sans";

const theme = extendTheme({
    body: {
        color: "#F8F8F8"
    }, 
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "DM Sans",
                color: "#545454"
            },
            sizes: {
                primary: {
                    fontSize: "4xl"
                }, 
                secondary: {
                    fontSize: "2xl"
                }
            }, 
            variants: {
                mainText: {
                    padding: "20px"
                }
            }

        }, 
        Button: {
            baseStyle: {
                fontFamily: "DM Sans",
            }, 
            variants: {
                document: {
                    bg: "#F8F8F8", 
                    m: "20px", 
                    mr: "40px", 
                    ml: "40px",
                    p: "5px",
                    borderRadius: "10px", 
                    width: "100px",
                    height: "100px", 
                    whiteSpace: "normal", 
                    fontSize: "sm", 
                    textAlign: "left",
                    color: "#545454"
                },
                addbutton: {
                    width: "130px",
                    height: "130px",
                    pb: "10px"
                },
                createbutton: {
                    bg: "#2F80ED",
                    color: "white",
                }

            }
        }, 
    }, 

})
export default theme; 
