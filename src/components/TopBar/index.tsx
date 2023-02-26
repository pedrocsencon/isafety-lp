import { Box, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from '../../assets/logo-full.svg'

export default function TopBar(){
    const ButtonMotion = motion(Button)
    return(
        <Flex position={'fixed'} top={0} paddingX={[2, 12, 12]} background='white' zIndex={1000} paddingY={4} alignItems='center' justifyContent={'space-between'} width='100%' borderBottomWidth={1} borderBottomColor='opacity'>
        <Box>
        <Image src={logo} alt='logo-alt' />
        </Box>
          <ButtonMotion whileHover={{scale: 1.05}} _hover={{textColor: 'white', background: 'linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)'}} colorScheme={'black'} variant='outline'>Começar agora</ButtonMotion>
      </Flex>
    )
}