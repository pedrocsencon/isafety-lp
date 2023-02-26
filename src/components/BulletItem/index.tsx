import { Box, Stack, Text } from "@chakra-ui/react";
import { BulletItemProps } from "./types";

export default function BulletItem({Icon, text}: BulletItemProps){
    return(
        <Stack spacing={4} direction='row' maxW={'25rem'} alignItems='center'>
            <Box shadow='lg' padding={6} borderRadius={8}>
            <Icon color="#1F1F1F" size={36}/>
            </Box>
            <Text maxW={'50%'} textColor='text' fontSize='lg'>{text}</Text>
        </Stack>
    )
}