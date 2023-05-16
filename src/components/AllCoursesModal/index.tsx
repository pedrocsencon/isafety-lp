import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Stack,
} from '@chakra-ui/react'
import { AllCoursesModalProps } from './types'
import { useCallback } from 'react'
import { goToWppCourse } from '@/utils'

export default function AllCoursesModal({ isOpen, onClose }: AllCoursesModalProps) {

    const handleVida = useCallback(() => {
        goToWppCourse('variado. Pode me ajudar?')
}, [])


    return (
        <Modal size='3xl' scrollBehavior='inside' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader><Text fontWeight='bold' fontSize='2xl'>Todos os cursos</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Stack>
                <Text fontWeight='bold'>NR 5 – CIPA COMISSÃO INTERNA DE PREVENÇÃO A ACIDENTES – GRAU DE RISCO 1</Text>
<Text fontWeight='bold'>NR 5 – CIPA COMISSÃO INTERNA DE PREVENÇÃO A ACIDENTES – GRAU DE RISCO 2 – PARTE TEÓRICA</Text>
<Text fontWeight='bold'>NR 5 – CIPA COMISSÃO INTERNA DE PREVENÇÃO A ACIDENTES – GRAU DE RISCO 3 – PARTE TEÓRICA</Text>
<Text fontWeight='bold'>NR 5 – CIPA COMISSÃO INTERNA DE PREVENÇÃO A ACIDENTES – GRAU DE RISCO 4 – PARTE TEÓRICA</Text>
<Text fontWeight='bold'>NR 31 – CIPATR Comissão Interna de Prevenção a Acidentes do Trabalho Rural</Text>
<Text fontWeight='bold'>NR 31 Agrotóxicos, Adjuvantes e Produtos Afins</Text>
<Text fontWeight='bold'>NR 31 Segurança no Trabalho em Máquinas e Implementos Agrícolas</Text>
<Text fontWeight='bold'>NR 31 Agrotóxicos, Adjuvantes e Produtos Afins – Reciclagem</Text>
<Text fontWeight='bold'>NR 31 – Máquinas Equipamentos Reciclagem</Text>
<Text fontWeight='bold'>NR 32 – TREINAMENTO DE CAPACITAÇÃO PARA PROFISSIONAL DE SAUDE</Text>
<Text fontWeight='bold'>NR 32 — TREINAMENTO DE CAPACITAÇÃO PARA PROFISSIONAL DE SAÚDE — RECICLAGEM</Text>
<Text fontWeight='bold'>Operações de Soldagem e Corte a Quente</Text>
<Text fontWeight='bold'>Operações de Soldagem e Corte a Quente Reciclagem</Text>
<Text fontWeight='bold'>Auxiliar de Segurança do Trabalho</Text>
<Text fontWeight='bold'>Instalações elétricas</Text>
<Text fontWeight='bold'>Instalações elétricas – Telecom</Text>
<Text fontWeight='bold'>Instalações elétricas na Prática</Text>
<Text fontWeight='bold'>POWERPOINT 2016</Text>
<Text fontWeight='bold'>AUTOCAD 2D – 2018</Text>
<Text fontWeight='bold'>AUTOCAD 3D – 2018</Text>
<Text fontWeight='bold'>WORD 2019 BÁSICO</Text>
<Text fontWeight='bold'>EXCEL 2019 AVANÇADO</Text>
<Text fontWeight='bold'>ASSISTENTE ADMINISTRATIVO</Text>
<Text fontWeight='bold'>EXCEL 2016</Text>
<Text fontWeight='bold'>WORD 2016</Text>
<Text fontWeight='bold'>WORD 2019 AVANÇADO</Text>
<Text fontWeight='bold'>EXCEL 2019 BÁSICO</Text>
<Text fontWeight='bold'>INFORMÁTICA BÁSICA</Text>
<Text fontWeight='bold'>ADMINISTRAÇÃO DE EMPRESAS</Text>
                </Stack>
                </ModalBody>
                <ModalFooter shadow='inner'>
                    <Button onClick={handleVida} size='lg' variant='outline' colorScheme='whatsapp'>
                        Entrar em contato com um especialista
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}