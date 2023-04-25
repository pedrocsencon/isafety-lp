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
    if (item?.title) {
      goToWppCourse(item.title);
    }
  }, []);

  if (!item) {
    return <></>;
  }

  return (
    <Modal scrollBehavior="inside" size="6xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="bold" fontSize="2xl">
            {item.title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={['column', 'column', 'row']} textAlign={['center', 'center', 'initial']} borderRadius={'lg'} padding={8} bgColor='#6A4C9230' align='center' justify='center' width={'100%'}>
            <Image src={item.urlImage} width={["sm", "sm", "lg"]} height='auto' borderRadius='md' />
            <Stack marginLeft={[0, 0, 12]}>
              <Text fontWeight='bold' fontSize={['lg', 'lg', '2xl']}>{item.title}</Text>
              <Text fontSize={['md', 'md' ,'lg']}>{item.subtitle}</Text>
            </Stack>
          </Flex>
          <Stack marginTop={8} spacing={4}>
            {item.courses.map(course => {
              return (
                <Stack spacing={2} padding={4} bgColor='white' shadow='md' borderRadius='lg'>
                  <Stack direction={['column', 'row', 'row']}>
                    <Text fontWeight='bold' fontSize={['sm', 'md','lg']}>{course.title}</Text>
                    <Box width='fit-content' borderRadius='full' paddingX={2} bgColor='gray.100'>
                      <Text>{course.subtitle}</Text>
                    </Box>
                  </Stack>
                  <Stack direction={['column', 'row', 'row']}>
                    <Text color='green.500' fontSize='xl' fontWeight='bold'>R${course.price}</Text>
                    <HStack width={'fit-content'} paddingX={2} borderRadius='full' bgColor='gray.100'><FiClock color="black" /><Text>{course.horary}</Text><Text>-</Text><Text>{course.avaliable}</Text></HStack>
                  </Stack>
                  <Text>{course.description}</Text>
                  <HStack>
                    <Button onClick={()=>{ window.open(course.link, "_blank");}} colorScheme='blue'><Text >Comprar online</Text></Button>
                    <Button onClick={handleOpenWpp} colorScheme='whatsapp' variant='outline'><Text>Conversar conosco</Text></Button></HStack>
                </Stack>
              )
            })}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
