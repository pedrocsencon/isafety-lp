import { goTo } from "@/utils";
import { Button, Flex, IconButton, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import {MdChevronRight} from 'react-icons/md'
import {Link, scrollSpy} from 'react-scroll'
import LinkItem from "./components/LinkItem";

export default function FloatNavigation(){
    const FlexMotion = motion(Flex)
    const ButtonMotion = motion(Button)
    const TextMotion = motion(Text)
    const [hover, setHover] = useState<boolean>(false)
    const [currentLink, setCurrentLink] = useState<string>('home')
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    function hoverStart(){
        setHover(true)
    }

    function hoverEnd(){
        setHover(false)
    }

    const handleCurrentLink = useCallback((e: string)=>{
        setCurrentLink(e)
    },[])

    const width = useMemo(()=>{
    if(isLargerThan800){
       return hover ? '27rem' : '26rem'
    }
    return '24rem'
    },[isLargerThan800, hover])

    const marginLeft = useMemo(()=>{
        if(isLargerThan800){
            return '-13rem'
        }
        return '-12rem'
    },[isLargerThan800])

    return (
        <FlexMotion zIndex={999} whileHover={{scale: 1.05, y: -10}} transition={{delay: 0.1}} backgroundColor='white' borderRadius={12} left={'50%'} marginLeft={marginLeft} position='fixed' bottom={50} justifyContent='space-between' shadow='md' paddingX={6} paddingY={3} alignItems='center' width={width} height={16}>
           <Stack spacing={6} direction='row'>
           <LinkItem currentLink={currentLink} handleCurrentLink={handleCurrentLink} text="home" to="home"/>
           <LinkItem currentLink={currentLink} handleCurrentLink={handleCurrentLink} text="o que oferecemos?" to="products"/>
           <LinkItem currentLink={currentLink} handleCurrentLink={handleCurrentLink} text="sobre" to="about"/>
           </Stack>
            {isLargerThan800 ? 
            (
                <ButtonMotion onHoverStart={hoverStart} onHoverEnd={hoverEnd} onClick={goTo} borderRadius={8} colorScheme='red' width={hover ? 24 : 12} height={12}>
                {hover && <TextMotion opacity={0} x={50} animate={{opacity: 1, x: 0}} transition={{delay: 0.2}}>Acessar</TextMotion>}
                <MdChevronRight />
            </ButtonMotion>
            )
            :
            (
                <IconButton aria-label="cta" colorScheme='red' onClick={goTo} icon={<MdChevronRight />}/>
            )
        }
        </FlexMotion>
    )
}