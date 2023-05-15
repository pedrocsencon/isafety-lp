import { goTo } from "@/utils"
import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { CTAButtonProps } from "./types"

export default function CTAButton({height}: CTAButtonProps){
    const ButtonMotion = motion(Button)
    const navigation = useRouter();

    const handleForYou = useCallback(() => {
        navigation.push('/para-voce')
      }, [])

    return(
        <ButtonMotion  whileHover={{scale: 1.05}} id='testbutton' onClick={handleForYou} borderRadius={8} paddingX={8} height={height} size='lg' textColor='white'>Começar agora</ButtonMotion>
    )
}