import { Box, Button, Divider, Flex, Link, Stack, Text } from '@chakra-ui/react'

interface CartResumeProps {
  cartTotal: string
  deliveryPrice: string
  cartTotalWithDelivery: string
}

const CartResume = ({
  cartTotal,
  deliveryPrice,
  cartTotalWithDelivery,
}: CartResumeProps) => {
  return (
    <Flex flexDir={'column'} w={'100%'} minH={'70vh'} bgColor={'#FFF'} p="24px">
      <Text fontSize={'20px'} fontWeight={'600'}>
        RESUMO DO PEDIDO
      </Text>
      <Flex mt={'30px'} mb={'12px'} justifyContent={'space-between'}>
        <Text fontSize={'16px'}>Subtotal de produtos</Text>
        <Text fontSize={'16px'}>{cartTotal}</Text>
      </Flex>
      <Flex justifyContent={'space-between'}>
        <Text fontSize={'16px'}>Entrega</Text>
        <Text fontSize={'16px'}>{deliveryPrice}</Text>
      </Flex>
      <Divider m={'24px 0 10px'} />
      <Flex justifyContent={'space-between'} mb={'40px'}>
        <Text fontSize={'16px'} fontWeight={'600'}>
          Total
        </Text>
        <Text fontSize={'16px'} fontWeight={'600'}>
          {cartTotalWithDelivery}
        </Text>
      </Flex>
      <Box flexGrow={'1'}>
        <Button
          w={'100%'}
          bgColor={'green'}
          color={'#fff'}
          borderRadius={'4px'}
          colorScheme="green"
          fontSize={'16px'}
          fontWeight={'500'}
        >
          FINALIZAR COMPRA
        </Button>
      </Box>
      <Stack color={'#737380'} textDecor={'underline'} fontSize={'14px'}>
        <Link>AJUDA</Link>
        <Link>REEMBOLSOS</Link>
        <Link>ENTREGAS E FRETES</Link>
        <Link>TROCAS E DEVOLUÇÕES</Link>
      </Stack>
    </Flex>
  )
}

export default CartResume
