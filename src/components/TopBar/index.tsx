import { goTo } from "@/utils";
import { Box, Button, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../assets/logo-full.svg";
import { useRouter } from "next/router";
import { useCallback } from "react";

import DrawerOptions from "../DrawerOptions";

export default function TopBar() {
  const ButtonMotion = motion(Button);
  const navigation = useRouter();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')


  const handleProducts = useCallback(() => {
    navigation.push('/para-empresas')
  }, [])

  const handleForYou = useCallback(() => {
    navigation.push('/para-voce')
  }, [])

  const handleHome = useCallback(() => {
    navigation.push('/')
  }, [])

  return (
    <Flex
      position={"fixed"}
      top={0}
      paddingX={[2, 12, 12]}
      background="white"
      zIndex={1000}
      paddingY={4}
      alignItems="center"
      justifyContent={"space-between"}
      width="100%"
      borderBottomWidth={1}
      borderBottomColor="opacity"
    >
      <Box cursor='pointer' onClick={handleHome}>
        <Image src={logo} alt="logo-alt" />
      </Box>
      <Stack direction='row' spacing={8}>
        {isLargerThan800 ?
          <>
            <ButtonMotion
              _hover={{
                backgroundColor: 'blue.500',
                color: 'white',
              }}
              whileHover={{ scale: 1.05 }} variant="ghost"
              onClick={handleForYou}
            >
              Para você
            </ButtonMotion>
            <ButtonMotion
              _hover={{
                backgroundColor: 'red.500',
                color: 'white',
              }}
              whileHover={{ scale: 1.05 }} variant="ghost"
              onClick={handleProducts}
            >
              Para sua empresa
            </ButtonMotion>
            <ButtonMotion
              onClick={goTo}
              whileHover={{ scale: 1.05 }}
              _hover={{
                textColor: "white",
                background:
                  "linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)",
              }}
              colorScheme={"black"}
              variant="outline"
            >
              Começar agora
            </ButtonMotion>
          </>
          :
          <DrawerOptions />
        }

      </Stack>
    </Flex>
  );
}
