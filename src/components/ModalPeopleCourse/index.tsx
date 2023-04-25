import { goToWpp, goToWppCourse } from "@/utils";
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
  Flex,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { ModalPeopleCoursesProps } from "./types";
import { GiNotebook } from "react-icons/gi";
import { MdComputer } from "react-icons/md";

export default function ModalPeopleCourse({
  isOpen,
  item,
  onClose,
}: ModalPeopleCoursesProps) {
  const handleOpenWpp = useCallback(() => {
    if (item) {
      goToWppCourse(item.title);
    }
  }, []);

  if (!item) {
    return <></>;
  }

  return (
    <Modal scrollBehavior="inside" size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="bold" fontSize="2xl">
            {item.title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex borderRadius={'lg'} padding={8} bgColor='#6A4C9230' align='center' justify='center' width={'100%'}>
            <Image src={item.urlImage} width={"lg"} height={56} borderRadius='md' />
            <Stack marginLeft={12}>
              <Text fontWeight='bold' fontSize='2xl'>{item.title}</Text>
              <Text fontSize={'lg'}>{item.subtitle}</Text>

            </Stack>
          </Flex>
          <Stack marginTop={8} spacing={4}>
            {item.courses.map(course => {
              return (
                <Stack spacing={2} padding={4} bgColor='white' shadow='md' borderRadius='lg'>
                  <HStack>
                    <Text fontWeight='bold' fontSize='lg'>{course.title}</Text>
                    <Box width='fit-content' borderRadius='full' paddingX={2} bgColor='gray.100'>
                      <Text>{course.subtitle}</Text>
                    </Box>
                  </HStack>
                  <HStack>
                    <Text color='green.500' fontSize='xl' fontWeight='bold'>R${course.price}</Text>
                    <HStack paddingX={2} borderRadius='full' bgColor='gray.100'><FiClock color="black" /><Text>{course.horary}</Text><Text>-</Text><Text>{course.avaliable}</Text></HStack>
                  </HStack>
                  <Text>{course.description}</Text>
                  <HStack>
                    <Button onClick={()=>{ window.open(course.link, "_blank");}} colorScheme='blue'><MdComputer /><Text marginLeft={2}>Comprar online</Text></Button>
                    <Button onClick={handleOpenWpp} colorScheme='whatsapp' variant='outline'><FaWhatsapp/><Text marginLeft={2}>Conversar conosco</Text></Button></HStack>
                </Stack>
              )
            })}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
