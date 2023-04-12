import { colors } from "@/constants";
import { CompanyCoursesInfo } from "@/constants/types";
import { Box, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { FaClock } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { CompanyCoursesItemProps } from "./types";

export default function CompanyCoursItem({item, onOpen}: CompanyCoursesItemProps) {
    const StackMotion = motion(Stack)

    const handleOpenModal = useCallback(()=>{
        onOpen(item)
    },[])
   
    return (
        <StackMotion onClick={handleOpenModal} cursor='pointer' whileHover={{
            scale: 1.02,
            background: `linear-gradient(60deg,  ${colors[Math.floor(Math.random()*colors.length)]}, transparent)`,
        }} justifyContent='space-between' height={'27rem'} padding={4} borderRadius={'lg'} shadow='md' bgColor='white'>
               <Stack spacing={4}>
               <Image  maxHeight={48} alt={item.title} src={item.urlImage}/>
            <Text fontWeight='bold'>
                {item.title}
            </Text>
            <Text fontSize='sm'>
                {item.subtitle}
            </Text>
            <HStack opacity={0.7}>
                <FiClock />
                <Text fontSize={'xs'}>
                    {item.horary}
                </Text>
            </HStack>
               </Stack>
            <HStack padding={2} borderRadius={'lg'} bgColor={'opacity'} opacity={0.7} justify='space-between'>
                <Text fontSize={'sm'}>
                    ON-LINE
                </Text>
                <Text>
                    •
                </Text>
                <Text fontSize={'sm'}>
                    IN-COMPANY
                </Text>
            </HStack>
        </StackMotion>
    )
}