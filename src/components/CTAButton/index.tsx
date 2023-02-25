import { goTo } from "@/utils"
import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CTAButtonProps } from "./types"

export default function CTAButton({height}: CTAButtonProps){
    return(
        <Button onClick={goTo} borderRadius={12} paddingX={8} height={height} size='md' colorScheme='black'>Começar agora</Button>
    )
}