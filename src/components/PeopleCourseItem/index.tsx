import { colors } from "@/constants";
import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { FiClock } from "react-icons/fi";
import {PeopleCoursesItemProps } from "./types";
import { goToWppCourse } from "@/utils";

export default function PeopleCourseItem({item, onOpen}: PeopleCoursesItemProps) {
    const StackMotion = motion(Stack)

    const handleOpenModal = useCallback(()=>{
        onOpen(item)
    },[])

    const handleOpenWpp = useCallback(() => {
        if (item) {
            goToWppCourse(item.title)
        }
    }, [])

   
    return (
        <StackMotion onClick={handleOpenModal} cursor='pointer' whileHover={{
            scale: 1.02,
            background: `linear-gradient(60deg,  ${colors[Math.floor(Math.random()*colors.length)]}, transparent)`,
        }} justifyContent='space-between'  padding={4} borderRadius={'lg'} shadow='md' bgColor='white'>
               <Stack spacing={4}>
               <Image  maxHeight={48} alt={item.title} src={item.urlImage}/>
            <Text fontWeight='bold'>
                {item.title}
            </Text>
            <Text  fontSize='sm'>
                {item.subtitle}
            </Text>
               </Stack>
           <Stack>
           <Button onClick={handleOpenModal} colorScheme="blue">
                Ver modalidades
            </Button>
           <Button onClick={handleOpenWpp} variant='outline' colorScheme="whatsapp">
                Fale com um consultor
            </Button>
           </Stack>
        </StackMotion>
    )
}