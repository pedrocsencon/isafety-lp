import BulletItem from "@/components/BulletItem";
import TopBar from "@/components/TopBar";
import Values from "@/components/Values";

import { Box, Button, Badge, Flex, Heading, SimpleGrid, Stack, Text, useMediaQuery, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronsDown, FiInstagram } from 'react-icons/fi'
import { MdComputer, MdDocumentScanner, MdHealthAndSafety, MdSupervisorAccount, MdSubscriptions, MdLocalHospital, MdChevronRight, MdOutlineEmail, MdFileCopy, MdPhone } from "react-icons/md";
import { GiBrazil } from 'react-icons/gi'
import { goToInsta, goToWppCourse } from "@/utils";

import certified from '../assets/certificados.png'

import { Link } from 'react-scroll'
import Head from "next/head";

import illustration from '../assets/worker.png'
import logo_about from '../assets/logo_about.svg'
import { goToEmail, goToWpp } from "@/utils";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FloatWppButton from "@/components/FloatWppButton";
export default function Home() {
  const StackMotion = motion(Stack)
  const ButtonMotion = motion(Button)
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const navigation = useRouter();

  const handleProducts = useCallback(() => {
    navigation.push("/para-empresas");
  }, []);

  const handleForYou = useCallback(() => {
    navigation.push("/para-voce");
  }, []);

  const handleVida = useCallback(() => {
        goToWppCourse('iSafety Vida')
}, [])

const handleCta = useCallback(() => {
  goToWpp()
}, [])


  return (
    <>
      <Head>
        <title>Grupo iSafety - Segurança no trabalho</title>
        <meta
          name="description"
          content="Descubra um novo jeito de aprender sobre segurança no trabalho e muito mais."
        />
        <meta name="author" content="Grupo iSafety" />
        <meta name="keywords" content="Next.JS, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="© 2023 iSafety" />
        <meta name="generator" content="Next.JS" />
        <meta name="rating" content="general" />
      </Head>
      <TopBar />
      <FloatWppButton/>
      <Box  width='100%' paddingX={isLargerThan1000 ? 12 : 8} backgroundColor={'white'}>
        <Flex marginTop={24} marginBottom={12} justifyContent={isLargerThan1000 ? 'space-between' : 'center'} alignItems='center'>
          <Stack marginTop={isLargerThan1000 ? 12 : 0} textAlign={isLargerThan1000 ? 'initial' : 'center'} spacing={isLargerThan1000 ? 12 : 4} width={isLargerThan1000 ? '50%' : '100%'}>
            <Box width={isLargerThan1000 ? '90%' : '100%'}>
              <Heading size={['xl', '2xl', '2xl']}>
                Diga olá 👋🏽,
              </Heading>
              <Heading  size={['xl', '2xl', '2xl']}>
                para um novo jeito de aprender sobre <Heading size={['xl', '2xl', '2xl']} id='gradientText2'>segurança no trabalho</Heading>
              </Heading>
            </Box>
            <Text fontSize='xl' maxWidth={isLargerThan1000 ? '75%' : '100%'} textColor={'text'}>
              Foque na qualidade de vida da sua empresa, saiba tudo sobre segurança no trabalho.
            </Text>
            <Stack justifyContent={isLargerThan1000 ? 'initial' : 'center'} direction='row' spacing={4}>
             <Button onClick={handleCta}  colorScheme='green' size='md' height={12} width={48}>Começar agora</Button>
              <ButtonMotion onClick={goToWpp} whileHover={{ scale: 1.05 }} _hover={{ textColor: 'white', background: 'linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)' }} height={12} borderRadius={8} variant='outline' colorScheme='black' paddingX={8}>Contate-nos</ButtonMotion>
            </Stack>
            <Link offset={-24} to='products' smooth>
              <StackMotion justifyContent={isLargerThan1000 ? 'initial' : 'center'} cursor='pointer' animate={{ y: [0, -2, 2, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1, repeat: Infinity }} direction='row' alignItems='center'>
                <FiChevronsDown size={24} color='#FF595E' />
                <Text textColor='red.500'>Role para baixo para saber mais</Text>
              </StackMotion>
            </Link>
          </Stack>
          {isLargerThan1000 && (
            <Box position='absolute' right={0} width='55%'>
              <Image alt="illustration" src={illustration} />
            </Box>
          )}
        </Flex>
        <SimpleGrid columns={[1, 2, 5]} spacing={4} paddingY={12} justifyContent='center' alignItems='center' width='100%'>
          <BulletItem Icon={GiBrazil} text='Atuação nacional' />
          <BulletItem Icon={MdDocumentScanner} text='Programas e Laudos' />
          <BulletItem Icon={MdHealthAndSafety} text='Qualidade de Vida' />
          <BulletItem Icon={MdSupervisorAccount} text='Treinamentos EAD' />
          <BulletItem Icon={MdComputer} text='Treinamentos IN COMPANY' />
        </SimpleGrid>
        <Flex id='products' marginY={12} alignItems='center' justifyContent='center'>
        </Flex>
        <Stack spacing={12} width='100%' alignItems={isLargerThan1000 ? 'initial' : 'center'}>
          <Stack width='100%' spacing={4} alignItems='center'>
            <Stack spacing={4} direction='row'>
              <MdSubscriptions size={24} color='#6A4C93' />
              <MdLocalHospital size={24} color='#8AC926' />
              <MdFileCopy size={24} color='#1982C4' />
            </Stack>
            <Heading textAlign={isLargerThan1000 ? 'initial' : 'center'}>O que nós oferecemos?</Heading>
            <Text textAlign='center' fontSize='xl' maxWidth={isLargerThan1000 ? '50%' : '90%'} textColor={'text'}>
              Nós cuidamos de tudo para oferecer a você o melhor dos conteúdos sobre segurança no trabalho
            </Text>
          </Stack>
          <Stack direction={isLargerThan1000 ? 'row' : 'column'} spacing={8}>
            <Stack justifyContent='end' width={isLargerThan1000 ? 2 / 3 : '100%'} shadow='xl' borderRadius={8} spacing={4} padding={12}>
              <MdSubscriptions color="#6A4C93" size={36} />
              <Heading textColor='purple.500'>iSafety Treinamentos</Heading>
              <Text>
                Tem como objetivo promover um ambiente de trabalho seguro e eficiente por meio de treinamentos de alta qualidade. Oferecemos uma ampla variedade de treinamentos para atender as suas necessidades de segurança do trabalho com a garantia de um serviço de excelência. Contamos com treinamentos na modalidade EAD e IN COMPANY.
              </Text>
              <ButtonMotion onClick={handleForYou} whileHover={{ scale: 1.02 }} _hover={{ textColor: 'white', background: 'linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)' }} height={12} justifyContent='space-between' borderRadius={8} variant='outline' colorScheme='black' paddingX={8}>Para pessoas físicas <MdChevronRight size={18} /></ButtonMotion>
            <ButtonMotion onClick={handleProducts} whileHover={{ scale: 1.02 }} _hover={{ textColor: 'white', background: 'linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)' }} height={12} justifyContent='space-between' borderRadius={8} variant='outline' colorScheme='black' paddingX={8}>Para empresas <MdChevronRight size={18} /></ButtonMotion>
            </Stack>
            <Stack borderWidth={1} borderColor='green.500' justifyContent='end' width={isLargerThan1000 ? 1 / 3 : '100%'} borderRadius={8} spacing={4} padding={12}>
              <MdLocalHospital size={36} color={'#8AC926'} />
              <Heading textColor='green.500'>iSafety Vida</Heading>
              <Text>
                Tem como objetivo promover qualidade de vida nos locais de trabalho, tornando o ambiente mais seguro e agradável.
              </Text>
              <Button onClick={handleVida} variant='outline' colorScheme='green'>
               Conversar com especialista
              </Button>
            </Stack>
            <Stack justifyContent='end' borderWidth={1} borderColor='blue.500' width={isLargerThan1000 ? 1 / 3 : '100%'} borderRadius={8} spacing={4} padding={12}>
              <MdFileCopy color="#1982C4" size={36} />
              <Badge width='fit-content' marginLeft={2} colorScheme="blue" color="#004491">
                EM BREVE
              </Badge>
              <Heading textColor='blue.500'>iSafety Documentação</Heading>
              <Text>
                Tem como objetivo desenvolver documentações de acordo com a legislação pertinente, a fim de auxiliar a empresa a tornar o ambiente de trabalho seguro.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Flex direction={isLargerThan1000 ? 'row' : 'column'} marginTop={36} justifyContent='space-between' alignItems='center'>
          <Stack spacing={4} width={isLargerThan1000 ? '60%' : '100%'}>
            <Heading>Quem somos?</Heading>
            <Text textColor={'text'}>
              O Grupo Isafety é uma empresa especializada em Segurança do Trabalho e Qualidade de Vida. Aqui na Isafety oferecemos uma ampla variedade de serviços de modo a atender as necessidades em matéria de segurança do trabalho, com a garantia de um serviço de excelência. Nossos serviços englobam toda a parte de Engenharia de Segurança do trabalho prevista nas normas regulamentadores NRs. Desde treinamentos, documentações e qualidade de vida nos locais de trabalho.
            </Text>
            <Stack >
              <Heading size='md'>Missão</Heading>
              <Text textColor='text' fontSize={['sm', 'md', 'lg']}>
                Gerar valor para os nossos colaboradores, clientes e sociedade por meio de serviços de excelência, propondo soluções inovadoras e criativas para que possam desfrutar do mais alto nível de segurança do trabalho e qualidade de vida.
              </Text>
            </Stack>
            <Stack>
              <Heading size='md'>Visão</Heading>
              <Text textColor='text' fontSize={['sm', 'md', 'lg']}>
                Ser empresa referência em matéria de Segurança do Trabalho, por meio de práticas e métodos eficientes e inovadores.
              </Text>
            </Stack>
            <Values />
          </Stack>
          <Image alt="logo_about" src={logo_about} />
        </Flex>
        <Stack id='empresa' marginTop={24} spacing={8} width='100%' alignItems={'center'} justifyContent='center'>
          <Heading textAlign='center' width={['100%', '90%', '40%']}><Heading id='gradientText'>Sua empresa</Heading> com maior segurança</Heading>
         <Stack textAlign='center' width={['100%', '90%', '30%']}>
           <Text >Obtenha mais informações sobre nossos produtos focados para empresas.</Text>
          <Text>
          Fale conosco clicando no botão abaixo
          </Text>
         </Stack>
         <ButtonMotion onClick={goToWpp} whileHover={{ scale: 1.02 }} _hover={{ textColor: 'white', background: 'linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)' }} height={12} justifyContent='space-between' borderRadius={8} variant='outline' colorScheme='black' paddingX={8}>Entrar em contato</ButtonMotion>
        </Stack>
        <Flex paddingTop={24} justifyContent='center' width='100%' alignItems='center'>
          <Stack spacing={4} direction={['column', 'column', 'row']}>
            <StackMotion onClick={goToEmail} cursor='pointer' whileHover={{scale: 1.05, borderWidth: 1, borderColor: 'black', padding: 4, borderRadius: 48}} direction='row' alignItems='center' spacing={2}>
              <MdOutlineEmail size={'24'} color='black' />
              <Text>comercial@grupoisafety.com.br</Text>
            </StackMotion>
            <StackMotion onClick={goToWpp} cursor='pointer' whileHover={{scale: 1.05, borderWidth: 1, borderColor: 'black', padding: 4, borderRadius: 48}} direction='row' alignItems='center' spacing={2}>
            <MdPhone size={'24'} color='black' />
              <Text>(61) 9 8189-4455</Text>
            </StackMotion>
             <StackMotion onClick={goToInsta} cursor='pointer' whileHover={{scale: 1.05, borderWidth: 1, borderColor: 'black', padding: 4, borderRadius: 48}} direction='row' alignItems='center' spacing={2}>
              <FiInstagram size={'24'} color='black' />
              <Text>Grupo iSafety</Text>
            </StackMotion>
          </Stack>
        </Flex>
        <Stack paddingTop={12} justifyContent='center' width='100%' alignItems='center'>
            <Text fontSize='3xl'>Nossos registros</Text>
              <Image width={350} alt="certified" src={certified}/>
        </Stack>
      </Box>
    </>
  )
}