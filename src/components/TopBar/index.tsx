import { Box, Button, Flex, IconButton, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../../assets/logo-full.svg'
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "../CTAButton";

export default function TopBar(){
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  
    return(
        <Flex paddingY={4} alignItems='center' justifyContent={'space-between'} width='100%' borderBottomWidth={1} borderBottomColor='opacity'>
        <Box>
        <Image src={logo} alt='logo-alt' />
        </Box>
          <CTAButton height={10}/>
      </Flex>
    )
}