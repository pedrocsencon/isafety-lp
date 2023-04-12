import TopBar from "@/components/TopBar";
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";

export default function ForCompany(){
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

    return(
       <>
        <Head>
        <title>Produtos - Grupo iSafety</title>
        <meta
          name="description"
          content="Descubra um novo jeito de aprender sobre segurança no trabalho e muito mais."
        />
        </Head>
        <TopBar />
        <Box width='100%' paddingX={isLargerThan1000 ? 12 : 8} backgroundColor={'white'}>
        <Text>Show</Text>
        </Box>
       </>
    )                       
}