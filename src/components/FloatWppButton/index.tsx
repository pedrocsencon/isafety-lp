import { goToWpp } from "@/utils"
import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function FloatWppButton(){
  const FlexMotion = motion(Flex)

    return(
        <FlexMotion onClick={goToWpp} whileHover={{ scale: 1.1, backgroundColor: '#25d366' }} zIndex={1000} cursor='pointer' position='fixed' backgroundColor='white' alignItems='center' justifyContent='center' borderRadius='full' shadow='lg' right={10} bottom={10} width={16} height={16}>
        <FaWhatsapp color="black" size={24} />
      </FlexMotion>
    )
}