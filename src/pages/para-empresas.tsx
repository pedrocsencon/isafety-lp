import CompanyCoursItem from "@/components/CompanyCourseItem";
import FloatWppButton from "@/components/FloatWppButton";
import ModalCompanyCourse from "@/components/ModalCompanyCourse";
import TopBar from "@/components/TopBar";
import { colors, COMPANY_COURSES } from "@/constants";
import { CompanyCoursesInfo } from "@/constants/types";
import { Box, Divider, Heading, HStack, SimpleGrid, Stack, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import { useCallback, useState } from "react";

export default function ForCompany() {
  const {onClose, isOpen, onOpen} = useDisclosure();
  const [currentItem, setCurrentItem] = useState<CompanyCoursesInfo>()
  const handleOpenModal = useCallback((item: CompanyCoursesInfo)=>{
    setCurrentItem(item)
    onOpen();
  },[])

  const renderItem = useCallback((item: CompanyCoursesInfo)=> <CompanyCoursItem onOpen={handleOpenModal} item={item}/>,[])
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
            Certifique seus colaboradores com alto nível de conhecimento por meio da empresa referência em treinamentos, com instrutores de alto nível.
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
            Cursos mais vendidos
          </Text>
          <SimpleGrid marginTop={4} spacing={4} columns={[1, 2, 3, 4, 5]}>
            {COMPANY_COURSES.map(renderItem)}
          </SimpleGrid>
        </Box>
      </Box>
      <ModalCompanyCourse isOpen={isOpen} item={currentItem} onClose={onClose}/>
     <FloatWppButton/>
    </>
  )
}