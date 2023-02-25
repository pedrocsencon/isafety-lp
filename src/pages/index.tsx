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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />

      </Head>
      <Box width='100%' paddingX={12} backgroundColor={'white'}>
        <TopBar />
        <Flex>
          <Box border='1px solid red'>
            <Heading>
              Diga olá,
            </Heading>
            <Heading>
              para um novo jeito de aprender sobre segurança no trabalho
            </Heading>
            <Text textColor={'text'}>
              Ready evolves your calendar into a living, breathing multiplayer workspace for teams.
            </Text>
            <Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
