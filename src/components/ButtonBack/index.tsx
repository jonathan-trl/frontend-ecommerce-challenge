'use client'
import { Box, Button } from '@chakra-ui/react'
import IconBack from '../Icons/IconBack'
import { useRouter } from 'next/navigation'

const ButtonBack = () => {
  const router = useRouter()
  return (
    <Box mb="20px">
      <Button
        onClick={() => router.back()}
        leftIcon={<IconBack />}
        color={'#617480'}
        bg={'transparent'}
        _hover={{ bg: 'transparent' }}
      >
        Voltar
      </Button>
    </Box>
  )
}

export default ButtonBack
