import { goToWpp, goToWppCourse } from '@/utils'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    HStack,
    Text,
    Box,
    Stack,
    Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { ModalCompanyCoursesProps } from './types'

export default function ModalCompanyCourse({ isOpen, item, onClose }: ModalCompanyCoursesProps) {

    const handleOpenWpp = useCallback(() => {
        if (item) {
            goToWppCourse(item.title)
        }
    }, [])

    if (!item) {
        return <></>
    }

    return (
        <Modal size='3xl' scrollBehavior='inside' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader><Text fontWeight='bold' fontSize='2xl'>{item.title}</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack direction={['column', 'column', 'row']} marginY={2} spacing={8} align='start'>
                        <Stack width={['100%', '100%', '50%']}>
                            <Text fontWeight='bold' fontSize={'xl'}>
                            </Text>
                            <Image width={'100%'} maxHeight={56} alt={item.title} src={item.urlImage} />
                            

                        </Stack>
                        <Stack width={['100%', '100%', '60%']}>
                            <Text opacity={0.5} fontSize={'lg'}>
                                {item.subtitle}
                            </Text>
                            <Text >
                                {item.description}
                            </Text>
                            <HStack>
                            <HStack width={'fit-content'} padding={2} bgColor='opacity' borderRadius={'lg'}>
                                <FiClock />
                                <Text fontSize='sm'>
                                    {item.horary}
                                </Text>
                            </HStack>
                            <HStack padding={2} backgroundColor={'opacity'}  width={'fit-content'}  borderRadius={'lg'}>
                                <Text fontSize='sm'>
                                    ON-LINE
                                </Text>
                                <Text fontSize='sm'> 
                                    •
                                </Text>
                                <Text fontSize='sm'>
                                    IN-COMPANY
                                </Text>
                            </HStack>
                            </HStack>
                            <HStack padding={2} backgroundColor={'opacity'}  width={'fit-content'}  borderRadius={'lg'}>
                                <Text fontSize='sm'>
                                    Válido por 12 meses (em todo território nacional)
                                </Text>
                            </HStack>
                        </Stack>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button width={'100%'} size='lg' colorScheme='whatsapp' mr={3} onClick={handleOpenWpp}>
                        <HStack>
                            <FaWhatsapp />
                            <Text>
                                Entrar em contato
                            </Text>
                        </HStack>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}