import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../../assets/logo-full.svg'

export default function TopBar(){
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  
    return(
        <Flex position={'fixed'} top={0} paddingX={[2, 12, 12]} background='white' zIndex={1000} paddingY={4} alignItems='center' justifyContent={'space-between'} width='100%' borderBottomWidth={1} borderBottomColor='opacity'>
        <Box>
        <Image src={logo} alt='logo-alt' />
        </Box>
          <Button colorScheme={'black'} variant='outline'>Começar agora</Button>
      </Flex>
    )
}