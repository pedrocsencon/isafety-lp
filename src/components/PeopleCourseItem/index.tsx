import { colors } from "@/constants";
import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { FiClock } from "react-icons/fi";
import {PeopleCoursesItemProps } from "./types";

export default function PeopleCourseItem({item, onOpen}: PeopleCoursesItemProps) {
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
            <Text fontSize='sm' fontWeight='bold'>
                {item.title}
            </Text>
            <Text fontSize='xs'>
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