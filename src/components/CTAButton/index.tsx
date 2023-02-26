import { goTo } from "@/utils"
import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CTAButtonProps } from "./types"

export default function CTAButton({height}: CTAButtonProps){
    const ButtonMotion = motion(Button)

    return(
        <ButtonMotion  whileHover={{scale: 1.05}} id='testbutton' onClick={goTo} borderRadius={8} paddingX={8} height={height} size='md' textColor='white'>Começar agora</ButtonMotion>
    )
}