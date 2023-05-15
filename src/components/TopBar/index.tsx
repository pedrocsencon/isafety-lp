import { goTo, goToWppCourse } from "@/utils";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  useMediaQuery,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../assets/logo-full.svg";
import { useRouter } from "next/router";
import { useCallback } from "react";

import DrawerOptions from "../DrawerOptions";

export default function TopBar() {
  const ButtonMotion = motion(Button);
  const navigation = useRouter();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const handleProducts = useCallback(() => {
    navigation.push("/para-empresas");
  }, []);

  const handleForYou = useCallback(() => {
    navigation.push("/para-voce");
  }, []);

  const handleHome = useCallback(() => {
    navigation.push("/");
  }, []);

  const handleVida = useCallback(() => {
    goToWppCourse('iSafety Vida')
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
      <Box cursor="pointer" onClick={handleHome}>
        <Image src={logo} alt="logo-alt" />
      </Box>
      <Stack direction="row" spacing={8}>
        {isLargerThan800 ? (
          <>
            <Menu>
              <MenuButton colorScheme="purple" as={Button}>
                Nossos treinamentos
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleProducts}>Para sua empresa</MenuItem>
                <MenuItem onClick={handleForYou}>Para você</MenuItem>
              </MenuList>
            </Menu>
            <Button onClick={handleVida} disabled colorScheme="green">
              iSafety Vida
            </Button>
            <Button opacity={0.5} variant="outline" colorScheme="blue">
              Documentação
              <Badge marginLeft={2} colorScheme="blue" color="#004491">
                EM BREVE
              </Badge>
            </Button>
          </>
        ) : (
          <DrawerOptions />
        )}
      </Stack>
    </Flex>
  );
}
