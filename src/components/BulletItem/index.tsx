import { Stack, Text } from "@chakra-ui/react";
import { BulletItemProps } from "./types";

export default function BulletItem({Icon, text}: BulletItemProps){
    return(
        <Stack alignItems='center' width={48}>
            <Icon color="#F7F7F7" size={24}/>
            <Text textAlign='center' textColor='white'>{text}</Text>
        </Stack>
    )
}