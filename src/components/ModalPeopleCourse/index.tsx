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

  const handleOpenSite = useCallback(() => {
    window.open(item?.link, "_blank");
  }, []);

  if (!item) {
    return <></>;
  }

  return (
    <Modal size="4xl" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="bold" fontSize="2xl">
            {item.title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
