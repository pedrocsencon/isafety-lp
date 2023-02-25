import BulletItem from "@/components/BulletItem";
import FloatNavigation from "@/components/FloatNavigation";
import TopBar from "@/components/TopBar";
import Values from "@/components/Values";
import { goTo } from "@/utils";
import { Box, Button, Flex, Heading, IconButton, SimpleGrid, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiChevronsDown } from 'react-icons/fi'
import { MdComputer, MdDocumentScanner, MdHealthAndSafety, MdSupervisorAccount, MdSubscriptions, MdLocalHospital, MdOutlineFileCopy, MdChevronRight, MdEmail, MdAlternateEmail, MdOutlineEmail } from "react-icons/md";
import { RiDoubleQuotesL } from 'react-icons/ri'
import RED_LOGO from '../assets/red_logo.svg'
import { Link } from 'react-scroll'
import Head from "next/head";
import { useMemo } from "react";
import CTAButton from "@/components/CTAButton";

export default function Home() {
  const HMotion = motion(Heading)
  const StackMotion = motion(Stack)
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const xText = useMemo(() => isLargerThan800 ? -1000 : -1500, [isLargerThan800])

  return (
    <>
      <Head>
        <title>Aprenda Francês - Francês Divers</title>
        <meta
          name="description"
          content="Você que sempre sonhou em falar francês, e por vários motivos ainda não começou, aproveita essa oportunidade agora! Venha fazer parte do nosso curso FALANDO FRANCÊS."
        />
        <meta name="author" content="Frances Divers" />
        <meta name="keywords" content="Next.JS, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="© 2022 Frances Divers" />
        <meta name="generator" content="Next.JS" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" width="100%" overflowX='hidden'>
        <FloatNavigation />
        <TopBar />
        <Stack alignItems='center' padding={12} spacing={[8, 4, 4]}>
          <Stack direction='row' spacing={4}>
            <Heading fontWeight='bold' size={['2xl', '2xl', '4xl']}>Diga olá</Heading>
            <HMotion animate={{ rotate: [0, 15, -15, 0] }} whileTap={{ rotate: [0, 15, -15, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1 }} fontWeight='bold' size={['2xl', '2xl', '4xl']}>👋🏽️</HMotion>
          </Stack>
          <Box shadow={'xl'} padding={4} width={['100%', '75%', '75%']} borderRadius={8} overflowX='hidden' backgroundColor='black' >
            <HMotion animate={{ x: [0, xText, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.5, duration: 10, repeat: Infinity }} width='100%' whiteSpace='nowrap' textColor='white' fontWeight='bold' size='4xl'>
              para um novo jeito de aprender sobre segurança no trabalho 👷🏼‍♂️
            </HMotion>
          </Box>
          <Flex direction={['column', 'row', 'row']} alignItems='center' width={['100%', '75%', '75%']} justifyContent='space-between'>
            <Link to='products' smooth>
              <StackMotion cursor='pointer' animate={{ y: [0, -5, 10, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1, repeat: Infinity }} direction='row' alignItems='center'>
                <FiChevronsDown size={24} color='#1982C4' />
                <Text textColor='blue.500'>Role para baixo para saber mais</Text>
              </StackMotion>
            </Link>
            <Stack marginTop={isLargerThan800 ? 0 : 6} width={isLargerThan800 ? '30rem' : '100%'} spacing={2} direction={['column', 'row', 'row']} alignItems='center'>
              <Box borderWidth={1} borderColor='red.500' padding={2} borderRadius={8}>
                <RiDoubleQuotesL size={isLargerThan800 ? 24 : 12} color='#FF595E' />
              </Box>
              <Text textColor='text' textAlign={['center', 'start', 'start']} fontSize={['xs', 'sm', 'sm']}>”Ser empresa referência em matéria de Segurança do Trabalho,
                por meio de práticas e métodos eficientes e inovadores.”</Text> 
            </Stack>
          </Flex>
          {!isLargerThan800 && <CTAButton height={50}/>}
        </Stack>

        <SimpleGrid columns={[2, 2, 4]} spacing={[2, 4, 10]} id='products' paddingX={[4, 12, 36]} paddingY={[8, 12, 12]} justifyContent='center' alignItems='center' marginTop={[12, 24, 36]} width='100%' backgroundColor='red.500'>
          <BulletItem Icon={MdDocumentScanner} text='Programas e Laudos – em fase de implantação' />
          <BulletItem Icon={MdHealthAndSafety} text='Qualidade de Vida' />
          <BulletItem Icon={MdSupervisorAccount} text='Treinamentos IN COMPANY' />
          <BulletItem Icon={MdComputer} text='Treinamentos EAD' />
        </SimpleGrid>
        <Flex paddingX={[4, 12, 24]} paddingY={12} direction={['column', 'row', 'row']}>
          <Stack maxWidth={['100%', '60%', '50%']} shadow='md' borderRadius={8} justifyContent='space-between'>
            <Box borderTopRadius={8} backgroundColor='purple.500' width='100%' height={'3rem'} />
            <Stack padding={12} spacing={4}>
              <MdSubscriptions size={36} color='#6A4C93' />
              <Heading textColor='purple.500'>iSafety Treinamentos</Heading>
              <Text textColor='text'>Tem como objetivo promover um ambiente de trabalho seguro e eficiente por meio de treinamentos de alta qualidade. Oferecemos uma ampla variedade de treinamentos para atender as suas necessidades de segurança do trabalho com a garantia de um serviço de excelência. Contamos com treinamentos na modalidade EAD e IN COMPANY.</Text>
              <StackMotion cursor='pointer' whileHover={{ x: 10, textDecoration: 'underline', color: '#6A4C93' }} direction='row' alignItems='center'>
                <Text marginBottom={1} fontWeight='bold' textColor='purple.500' >Acessar agora</Text>
                <MdChevronRight color='#6A4C93' />
              </StackMotion >
            </Stack>
          </Stack>
          <Stack spacing={8} marginLeft={[0, 8, 8]}>
            <Box shadow='md' borderRadius={8} justifyContent='space-between'>
              <Box borderTopRadius={8} backgroundColor='green.500' width='100%' height={'2rem'} />
              <Stack padding={12}>
                <Stack alignItems='center' direction='row'>
                  <MdLocalHospital size={24} color='#8AC926' />
                  <Heading size='lg' textColor='green.500'>iSafety Vida</Heading>
                </Stack>
                <Text textColor='text'>Tem como objetivo promover qualidade de vida nos locais de trabalho, tornando o ambiente mais seguro e agradável.</Text>
              </Stack>
            </Box>
            <Box shadow='md' borderRadius={8} justifyContent='space-between'>
              <Box borderTopRadius={8} backgroundColor='blue.500' width='100%' height={'2rem'} />
              <Stack padding={12}>
                <Stack alignItems='center' direction='row'>
                  <MdOutlineFileCopy size={24} color='#1982C4' />
                  <Heading size='lg' textColor='blue.500'>iSafety Documentação</Heading>
                </Stack>
                <Text textColor='text'>Tem como objetivo desenvolver documentações de acordo com a legislação pertinente, a fim de auxiliar a empresa a tornar o ambiente de trabalho seguro.  </Text>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <Stack id='about' alignItems='center' spacing={8}>
          <Heading>Quem somos nós? 🤔</Heading>
          <Stack spacing={'-5rem'} alignItems='center'>
            <Image alt="logo_red" src={RED_LOGO} />
            <Flex direction='column' zIndex={-10} alignItems='flex-end' width={['95%', '80%', '60%']} backgroundColor='blue.200' padding={[4, 12, 12]} borderRadius={8}>
              <Text marginTop={24} textColor='white' fontSize={['sm', 'md', 'lg']} textAlign='justify'>
                O Grupo Isafety é uma empresa especializada em Segurança do Trabalho e Qualidade de Vida. Aqui na Isafety oferecemos uma ampla variedade de serviços de modo a atender as necessidades em matéria de segurança do trabalho, com a garantia de um serviço de excelência. <strong>Nossos serviços englobam toda a parte de Engenharia de Segurança do trabalho prevista nas normas regulamentadores NRs</strong>. Desde treinamentos, documentações e qualidade de vida nos locais de trabalho.
              </Text>
              <Stack textColor='white' marginTop={4}>
                <Heading size='md'>Missão</Heading>
                <Text fontSize={['sm', 'md', 'lg']}>
                  Gerar valor para os nossos colaboradores, clientes e sociedade por meio de serviços de excelência, propondo soluções inovadoras e criativas para que possam desfrutar do mais alto nível de segurança do trabalho e qualidade de vida.
                </Text>
              </Stack>
              <Stack textColor='white' marginTop={4}>
                <Heading size='md'>Visão</Heading>
                <Text fontSize={['sm', 'md', 'lg']}>
                  Ser empresa referência em matéria de Segurança do Trabalho, por meio de práticas e métodos eficientes e inovadores.
                </Text>
              </Stack>
            </Flex>
          </Stack>
          <Values />
        </Stack>
        <Stack spacing={8} alignItems='center' marginTop={[12, 24, 36]}>
          <Heading width={['90%', '50%', '60%']} textAlign='center' size='2xl'>Esteja preparado para o<Heading textColor='red.500' size='2xl'>mercado de trabalho</Heading></Heading>
          <Stack spacing={4} direction='row'>
            <IconButton height={16} width={16} borderRadius={12} aria-label="wpp" variant='outline' colorScheme='whatsapp' icon={<FaWhatsapp />} />
            <CTAButton height={16}/>
          </Stack>
        </Stack>
        <Flex marginBottom={24} padding={12} justifyContent='space-between' width='100%'>
          <Text textColor='text'>
            © todos os direitos reservados 2023
          </Text>
          <Stack direction='row' spacing={4}>
            <IconButton variant='outline' colorScheme='red' aria-label="instagram" color={'red.500'} icon={<FaInstagram size={20} />} />
            <IconButton variant='outline' colorScheme='red' aria-label="instagram" color={'red.500'} icon={<MdOutlineEmail size={24} />} />
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}
