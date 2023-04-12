import { goTo } from '@/utils'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    IconButton,
    Stack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { FiMenu } from 'react-icons/fi'

export default function DrawerOptions() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const ButtonMotion = motion(Button)
    const navigation = useRouter();

    const handleProducts = useCallback(() => {
        onClose()
        navigation.push('/para-empresas')
    }, [])

    return (
        <>
            <IconButton onClick={onOpen} aria-label="hamburguer" icon={<FiMenu />} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Opções</DrawerHeader>
                    <DrawerBody>
                      <Stack alignItems='start' spacing={4}>
                      <ButtonMotion
                            _hover={{
                                backgroundColor: 'blue.500',
                                color: 'white',
                            }}
                            whileHover={{ scale: 1.05 }} variant="ghost"
                            onClick={handleProducts}
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
                            Para empresas
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
                      </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}