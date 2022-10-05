import { Box, Text } from "@chakra-ui/react";

type peekText = {
    text: string
}
const Document = (props: peekText) => {
    const { text } = props
    return (
        <Box>
            <Text >
                {text}
            </Text>
        </Box>
    ); 
}
export default Document 