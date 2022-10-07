import { Image, Heading, HStack } from "@chakra-ui/react"; 

const Logo = () => {
    return (
        <HStack margin="30px">
            <Image src="healthicons_n-negative.svg" alt="logo image" boxSize="40px"></Image>
            <Heading size="secondary"> Notiom </Heading>
        </HStack>
    ); 
}

export default Logo 