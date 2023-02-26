import BulletItem from "@/components/BulletItem";
import TopBar from "@/components/TopBar";
import Values from "@/components/Values";

import { Box, Button, Flex, Heading, IconButton, SimpleGrid, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiChevronsDown } from 'react-icons/fi'
import { MdComputer, MdDocumentScanner, MdHealthAndSafety, MdSupervisorAccount, MdSubscriptions, MdLocalHospital, MdChevronRight, MdOutlineEmail, MdFileCopy } from "react-icons/md";


import { Link } from 'react-scroll'
import Head from "next/head";

import CTAButton from "@/components/CTAButton";
import illustration from '../assets/illustration.svg'
import logo_about from '../assets/logo_about.svg'

export default function Home() {
  const StackMotion = motion(Stack)
  const ButtonMotion = motion(Button)
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />

      </Head>
      <TopBar />
      <Box width='100%' paddingX={isLargerThan1000 ? 12 : 8} backgroundColor={'white'}>
        <Flex marginTop={24} justifyContent={isLargerThan1000 ? 'space-between' : 'center'} alignItems='center'>
          <Stack textAlign={isLargerThan1000 ? 'initial' : 'center'} spacing={isLargerThan1000 ? 12 : 4} width={isLargerThan1000 ? '50%' : '100%'}>
            <Box >
              <Heading size={['xl', '2xl' ,'2xl']}>
                Diga olá 👋🏽,
              </Heading>
              <Heading size={['xl', '2xl' ,'2xl']}>
                para um novo jeito de aprender sobre <Heading size={['xl', '2xl' ,'2xl']} id='gradientText'>segurança no trabalho</Heading>
              </Heading>
            </Box>
            <Text fontSize='xl' maxWidth={isLargerThan1000 ? '75%' : '100%'} textColor={'text'}>
              Foque na qualidade de vida da sua empresa, saiba tudo sobre segurança no trabalho.
            </Text>
            <Stack justifyContent={isLargerThan1000 ? 'initial' : 'center'} direction='row' spacing={4}>
              <CTAButton height={12} />
              <ButtonMotion whileHover={{scale: 1.05}} _hover={{textColor: 'white', background: 'linear-gradient(60deg, #FFCA3A, #FF595E, #6A4C93, #1982C4, #8AC926)'}} height={12} borderRadius={8} variant='outline' colorScheme='black' paddingX={8}>Contate-nos</ButtonMotion>
            </Stack>
            <Link offset={-24} to='products' smooth>
              <StackMotion justifyContent={isLargerThan1000 ? 'initial' : 'center'}  cursor='pointer' animate={{ y: [0, -2, 2, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1, repeat: Infinity }} direction='row' alignItems='center'>
                <FiChevronsDown size={24} color='#FF595E' />
                <Text textColor='red.500'>Role para baixo para saber mais</Text>
              </StackMotion>
            </Link>
          </Stack>
          {isLargerThan1000 && <Image alt="illustration" src={illustration} />}
        </Flex>
        <SimpleGrid columns={[1, 2, 4]} spacing={4} paddingY={12} justifyContent='center' alignItems='center' width='100%'>
          <BulletItem Icon={MdDocumentScanner} text='Programas e Laudos' />
          <BulletItem Icon={MdHealthAndSafety} text='Qualidade de Vida' />
          <BulletItem Icon={MdSupervisorAccount} text='Treinamentos EAD' />
          <BulletItem Icon={MdComputer} text='Treinamentos IN COMPANY' />
        </SimpleGrid>
        <Flex id='products' marginY={12} alignItems='center' justifyContent='center'>
          <Text textColor='text'>////////////////</Text>
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
            Nós cuidamos de tudo para oferecer a você o melhores dos conteúdos sobre segurança no trabalho
          </Text>
          </Stack>
          <Stack direction={isLargerThan1000? 'row' : 'column'} spacing={8}>
            <Stack justifyContent='end' width={isLargerThan1000 ? 2/3 : '100%'} shadow='xl' borderRadius={8} spacing={4} padding={12}>
              <MdSubscriptions color="#6A4C93" size={36}/>
              <Heading textColor='purple.500'>iSafety Treinamentos</Heading>
              <Text>
                Tem como objetivo promover um ambiente de trabalho seguro e eficiente por meio de treinamentos de alta qualidade. Oferecemos uma ampla variedade de treinamentos para atender as suas necessidades de segurança do trabalho com a garantia de um serviço de excelência. Contamos com treinamentos na modalidade EAD e IN COMPANY.
              </Text>
              <Button  variant='outline' colorScheme={'purple'} justifyContent='space-between' size='md' width='100%'>Acessar agora <MdChevronRight size={18}/></Button>
            </Stack>
            <Stack borderWidth={1} borderColor='green.500' justifyContent='end' width={isLargerThan1000 ? 1/3 : '100%'} borderRadius={8} spacing={4} padding={12}>
              <MdLocalHospital size={36} color={'#8AC926'}/>
              <Heading textColor='green.500'>iSafety Vida</Heading>
              <Text>
              Tem como objetivo promover qualidade de vida nos locais de trabalho, tornando o ambiente mais seguro e agradável. 
              </Text>
            </Stack>
            <Stack justifyContent='end' borderWidth={1} borderColor='blue.500' width={isLargerThan1000 ? 1/3 : '100%'} borderRadius={8} spacing={4} padding={12}>
              <MdFileCopy color="#1982C4" size={36}/>
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
          <Image alt="logo_about" src={logo_about}/>
        </Flex>
        <Stack marginTop={24} spacing={8} width='100%' alignItems={'center'} justifyContent='center'>
            <Heading textAlign='center' width={['95%', '80%' ,'35%']}>Esteja preparado para o <Heading id='gradientText'>mercado de trabalho</Heading></Heading>
            <CTAButton height={12}/>
        </Stack>
        <Flex paddingY={12} marginBottom={12} justifyContent='space-between' width='100%' alignItems='center'>
          <Text textColor='text' fontSize={['xs', 'md', 'md']}>
            © todos os direitos reservados 2023
          </Text>
          <Stack direction='row' spacing={4}>
            <IconButton variant='outline' colorScheme='red' aria-label="instagram" color={'red.500'} icon={<FaInstagram size={20} />} />
            <IconButton variant='outline' colorScheme='red' aria-label="instagram" color={'red.500'} icon={<MdOutlineEmail size={24} />} />
          </Stack>
        </Flex>
      </Box>
    </>
  )
}
