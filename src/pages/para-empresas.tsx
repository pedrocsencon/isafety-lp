import AllCoursesModal from "@/components/AllCoursesModal";
import CompanyCoursItem from "@/components/CompanyCourseItem";
import ModalCompanyCourse from "@/components/ModalCompanyCourse";
import TopBar from "@/components/TopBar";
import { colors, COMPANY_COURSES } from "@/constants";
import { CompanyCoursesInfo } from "@/constants/types";
import { Box, Button, Divider, Heading, HStack, SimpleGrid, Stack, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import { useCallback, useState } from "react";
import { FiBookOpen, FiFileText, FiPocket, FiVideo } from "react-icons/fi";

export default function ForCompany() {
  const modalCourse = useDisclosure();
  const modalAllCourses = useDisclosure();
  const [currentItem, setCurrentItem] = useState<CompanyCoursesInfo>()
  const handleOpenModal = useCallback((item: CompanyCoursesInfo)=>{
    setCurrentItem(item)
    modalCourse.onOpen();
  },[])

  const allCourses = useCallback(()=>{
    modalAllCourses.onOpen()
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
      <Script>
        {`(function(n,r,l,d){try{var h=r.head||r.getElementsByTagName("head")[0],s=r.createElement("script");s.defer=true;s.setAttribute("type","text/javascript");s.setAttribute("src",l);n.neuroleadId=d;h.appendChild(s);}catch(e){}})(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js", "vJyMFGFdB7mdWgpYGHiVg5bzn");`}
      </Script>
      <Box width='100%' >
        <Stack spacing={4} paddingTop={36} paddingBottom={24} bgGradient={`linear-gradient(60deg,  ${colors[Math.floor(Math.random()*colors.length)]}, ${colors[Math.floor(Math.random()*colors.length)]}, ${colors[Math.floor(Math.random()*colors.length)]})`} textAlign='center' alignItems='center' paddingX={[4, 12, 56]} justifyContent='center' width='100%'>
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
          <SimpleGrid  columns={[1,2,2,4]}>
            <Stack marginTop={8} height={72} textAlign='center' align='center' maxW={72} padding={12} borderRadius={'lg'} bgColor='white' shadow='md'>
              <FiVideo fontSize={36} color="black"/>
              <Text fontSize='lg' fontWeight='bold'>Vídeos didáticos</Text>
              <Divider />
              <Text>Vídeo aulas interativas ministradas por professores especialistas emm seus segmentos. </Text>
            </Stack>
            <Stack marginTop={8} height={72} textAlign='center' align='center' maxW={72} padding={12} borderRadius={'lg'} bgColor='white' shadow='md'>
              <FiBookOpen fontSize={36} color="black"/>
              <Text fontSize='lg' fontWeight='bold'>Material de leitura</Text>
              <Divider />
              <Text>Arquivos de leitura para complemento pedagógico.</Text>
            </Stack>
            <Stack marginTop={8} height={72} textAlign='center' align='center' maxW={72} padding={12} borderRadius={'lg'} bgColor='white' shadow='md'>
              <FiPocket fontSize={36} color="black"/>
              <Text fontSize='lg' fontWeight='bold'>Certificados automatizados</Text>
              <Divider />
              <Text>Com dados dos alunos conforme é estabelecido por Norma.</Text>
            </Stack>
            <Stack  marginTop={8} height={72} textAlign='center' align='center' maxW={72} padding={12} borderRadius={'lg'} bgColor='white' shadow='md'>
              <FiFileText fontSize={36} color="black"/>
              <Text fontSize='lg' fontWeight='bold'>Provas avaliativas</Text>
              <Divider />
              <Text>Provas avaliativas com intuito de comprovar o conhecimentos aquirido pelo aluno.</Text>
            </Stack>
          </SimpleGrid>
          <Divider marginY={12} borderColor={'gray.300'}/>
          <Text marginTop={4} fontWeight='bold' fontSize={'2xl'} width='100%'>
            Cursos mais vendidos para empresas
          </Text>
          <SimpleGrid marginTop={4} spacing={4} columns={[1, 2, 3, 4]}>
            {COMPANY_COURSES.map(renderItem)}
            <Stack
              cursor="pointer"
              padding={4}
              borderRadius={"lg"}
              shadow="md"
              justifyContent='space-between'
              bgColor="white"
              borderWidth={4}
              borderColor={"blue.300"}
            >
              <Stack
                spacing={4}
                padding={12}
                bgColor={"blue.50"}
                borderRadius={"lg"}
              >
                <Text
                  fontSize="2xl"
                  textAlign="center"
                  fontWeight="bold"
                  color={"blue.500"}
                >
                  Outros cursos para você
                </Text>
              </Stack>
              <Stack paddingX={12}>
                <Text  opacity={0.7} fontSize="sm" fontWeight="bold">
                  - Operações de Soldagem e Corte a Quente
                </Text>
                <Text opacity={0.3} fontSize="sm" fontWeight="bold">
                  - Auxiliar de Segurança do Trabalho...
                </Text>
              </Stack>
              <Button onClick={allCourses} colorScheme="blue">
                Ver todos cursos
              </Button>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
      <ModalCompanyCourse isOpen={modalCourse.isOpen} item={currentItem} onClose={modalCourse.onClose}/>
      <AllCoursesModal isOpen={modalAllCourses.isOpen} onClose={modalAllCourses.onClose} />
    </>
  )
}