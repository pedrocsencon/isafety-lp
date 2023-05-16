import { colors } from "@/constants";
import { CompanyCoursesInfo } from "@/constants/types";
import { Box, Button, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { FaClock } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { CompanyCoursesItemProps } from "./types";
import { goToWppCourse } from "@/utils";

export default function CompanyCoursItem({item, onOpen}: CompanyCoursesItemProps) {
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
        <StackMotion  whileHover={{
            scale: 1.02,
            background: `linear-gradient(60deg,  ${colors[Math.floor(Math.random()*colors.length)]}, transparent)`,
        }} justifyContent='space-between' padding={4} borderRadius={'lg'} shadow='md' bgColor='white'>
               <Stack spacing={4}>
               <Image  maxHeight={48} alt={item.title} src={item.urlImage}/>
            <Text fontWeight='bold'>
                {item.title}
            </Text>
            <Text fontSize='sm'>
                {item.subtitle}
            </Text>
            
               </Stack>
                <Stack>
                <HStack opacity={0.7}>
                <FiClock />
                <Text fontSize={'xs'}>
                    {item.horary}
                </Text>
            </HStack>
                <Button onClick={handleOpenWpp} colorScheme="blue">
                Fale com um consultor
            </Button>
            <Button onClick={handleOpenModal} variant='outline' colorScheme="gray">
                Ver detalhes
            </Button>
                </Stack>
        </StackMotion>
    )
}