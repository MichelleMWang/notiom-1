import { extendTheme } from "@chakra-ui/react"
import "@fontsource/dm-sans";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#F8F8F8"
            }
        }
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "DM Sans",
                color: "#545454"
            },
            sizes: {
                primary: {
                    fontSize: "5xl"
                }, 
                secondary: {
                    fontSize: "3xl"
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
                    mr: "50px", 
                    ml: "50px",
                    p: "10px",
                    borderRadius: "7px", 
                    width: "100px",
                    height: "100px", 
                    whiteSpace: "normal", 
                    fontSize: "sm", 
                    textAlign: "left",
                    color: "#545454", 
                    border: "1px solid #A3A3A3", 
                },
                addbutton: {
                    width: "130px",
                    height: "130px",
                    ml: "36px", 
                    mt: "5px"
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
