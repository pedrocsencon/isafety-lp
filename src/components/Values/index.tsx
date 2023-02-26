import { Box, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Values() {
    const StackMotion = motion(Stack);
    return (
        <Box width={'100%'}  overflow='hidden'>
            <StackMotion  animate={{ x: [0, -1000, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.5, duration: 15, repeat: Infinity }} direction='row'>
                <Text whiteSpace='nowrap'>
                    Melhoria Contínua
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Satisfação do Cliente
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Credibilidade e Segurança
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Ética e Comprometimento
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Responsabilidade Social
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Planejamento
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Inovação
                </Text>
                <Text whiteSpace='nowrap'>
                    Melhoria Contínua
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Satisfação do Cliente
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Credibilidade e Segurança
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Ética e Comprometimento
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Responsabilidade Social
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Planejamento
                </Text>
                <Text whiteSpace='nowrap'>
                    ●
                </Text>
                <Text whiteSpace='nowrap'>
                    Inovação
                </Text>
            </StackMotion>
        </Box>
    )
}