import { goToWpp, goToWppCourse } from "@/utils";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  Text,
  Stack,
  Image,
  Flex,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { FiClock } from "react-icons/fi";
import { ModalPeopleCoursesProps } from "./types";

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
          <Flex
            direction={["column", "column", "row"]}
            textAlign={["center", "center", "initial"]}
            borderRadius={"lg"}
            padding={8}
            bgColor="#6A4C9230"
            align="center"
            justify="center"
            width={"100%"}
          >
            <Image
              src={item.urlImage}
              width={["sm", "sm", "lg"]}
              height="auto"
              borderRadius="md"
            />
            <Stack marginLeft={[0, 0, 12]}>
              <Text fontWeight="bold" fontSize={["lg", "lg", "2xl"]}>
                {item.title}
              </Text>
              <Text fontSize={["md", "md", "lg"]}>{item.subtitle}</Text>
              <Text fontSize={["xs", "sm", "md"]}>{item.description}</Text>
              <HStack padding={2} backgroundColor={'#6A4C9220'}  width={'fit-content'}  borderRadius={'lg'}>
                                <Text fontWeight='bold' fontSize='sm'>
                                    Válido por 12 meses (em todo território nacional)
                                </Text>
                            </HStack>
            </Stack>
          </Flex>
          <SimpleGrid columns={[1, 2, 3]} marginTop={8} spacing={4}>
            {item.courses.map((course) => {
              return (
                <Stack justify='space-between' spacing={4} padding={4} shadow={"lg"} borderRadius={12}>
                  <Stack spacing={4}>
                  <Text fontWeight="bold" fontSize={["sm", "md", "lg"]}>
                    {course.title}
                  </Text>
                  <Text fontSize="sm">{course.subtitle}</Text>
                  <Text color="green.500" fontSize="3xl" fontWeight="bold">
                    R${course.price}
                  </Text>
                  <HStack
                    width={"fit-content"}
                    paddingX={2}
                    borderRadius="full"
                    bgColor="gray.100"
                  >
                    <FiClock color="black" />
                    <Text fontSize="sm">{course.horary}</Text>
                    <Text fontSize="sm">-</Text>
                    <Text fontSize="sm">{course.avaliable} de validade</Text>
                  </HStack>
                  </Stack>
                  <Divider/>
                <Stack>
                <Button
                    onClick={() => {
                      window.open(course.link, "_blank");
                    }}
                    colorScheme="blue"
                  >
                    <Text>Comprar online</Text>
                  </Button>
                  <Button
                    onClick={handleOpenWpp}
                    colorScheme="whatsapp"
                    variant="outline"
                  >
                    <Text>Conversar conosco</Text>
                  </Button>
                </Stack>
                </Stack>
              );
            })}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
