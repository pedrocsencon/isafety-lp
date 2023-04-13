import CompanyCoursItem from "@/components/CompanyCourseItem";
import FloatWppButton from "@/components/FloatWppButton";
import ModalCompanyCourse from "@/components/ModalCompanyCourse";
import ModalPeopleCourse from "@/components/ModalPeopleCourse";
import PeopleCourseItem from "@/components/PeopleCourseItem";
import TopBar from "@/components/TopBar";
import { colors, COMPANY_COURSES, PEOPLE_COURSES } from "@/constants";
import { CompanyCoursesInfo, PeopleCoursesInfo } from "@/constants/types";
import { Box, Divider, Heading, HStack, SimpleGrid, Stack, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import { useCallback, useState } from "react";

export default function ForCompany() {
  const {onClose, isOpen, onOpen} = useDisclosure();
  const [currentItem, setCurrentItem] = useState<PeopleCoursesInfo>()
  const handleOpenModal = useCallback((item: PeopleCoursesInfo)=>{
    setCurrentItem(item)
    onOpen();
  },[])

  const renderItem = useCallback((item: PeopleCoursesInfo)=> <PeopleCourseItem onOpen={handleOpenModal} item={item}/>,[])
  return (
    <>
      <Head>
        <title>Produtos - Grupo iSafety</title>
        <meta
          name="description"
          content="Descubra um novo jeito de aprender sobre segurança no trabalho e muito mais."
        />
      </Head>
      <TopBar />
      <Box width='100%' >
        <Stack spacing={4} paddingTop={36} paddingBottom={24} bgGradient={`linear-gradient(60deg,  ${colors[Math.floor(Math.random()*colors.length)]}, ${colors[Math.floor(Math.random()*colors.length)]}, ${colors[Math.floor(Math.random()*colors.length)]})`} textAlign='center' alignItems='center' paddingX={[4, 12, 56]} justifyContent='center' width='100%' >
          <Heading size={['lg', 'xl', '2xl']}>
            Invista no seu conhecimento sobre segurança no trabalho.
          </Heading>
        </Stack>
        <Box padding={12}  width={'100%'}>
          <Heading>
          Nossos cursos
          </Heading>
          <Text marginTop={4} fontSize={'xl'} width={['100%', '90%', '80%']}>
            A Isafety conta com os melhores treinamentos com validade e reconhecimento em todo território nacional.
          </Text>
          <Divider marginY={12} borderColor={'gray.300'}/>
          <Text marginTop={4} fontWeight='bold' fontSize={'2xl'} width='100%'>
            Cursos mais vendidos para pessoas físicas
          </Text>
          <SimpleGrid marginTop={4} spacing={4} columns={[1, 2, 3, 4, 5]}>
            {PEOPLE_COURSES.map(renderItem)}
          </SimpleGrid>
        </Box>
      </Box>
      <ModalPeopleCourse isOpen={isOpen} item={currentItem} onClose={onClose}/>
     <FloatWppButton/>
    </>
  )
}