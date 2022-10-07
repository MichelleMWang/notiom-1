import { Button, Text, GridItem } from "@chakra-ui/react";

type peekText = {
    text: string
}
const Document = (props: peekText) => {
    const { text } = props
    return (
        <GridItem>
            <Button variant="document">
                <Text >
                    {text}
                </Text>
            </Button>
        </GridItem>
    ); 
}
export default Document 