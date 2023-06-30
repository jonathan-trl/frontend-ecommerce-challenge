'use client'
import ButtonBack from '@/components/ButtonBack'
import Container from '@/components/Container'
import IconWhiteCart from '@/components/Icons/IconWhiteCart'
import useProduct from '@/hooks/useProduct'
import formatPriceInCentsToCurrency from '@/utils/formatPriceInCentsToCurrency'
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

const Product = ({ params }: { params: { id: string } }) => {
  const { data } = useProduct(params.id)

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem('cart-items')

    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems)

      let existingProduct = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === params.id
      )

      if (existingProduct != -1) {
        cartItemsArray[existingProduct].quantity += 1
      } else {
        cartItemsArray.push({ ...data, quantity: 1 })
      }

      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
    } else {
      const newCart = [
        {
          ...data,
          quantity: 1,
        },
      ]
      localStorage.setItem('cart-items', JSON.stringify(newCart))
    }
  }
  return (
    <Container>
      <ButtonBack />
      <SimpleGrid
        gridTemplateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2,1fr)',
        }}
      >
        <Box>
          <Image src={data?.image_url} alt="" w={'100%'} />
        </Box>
        <Flex
          flexDir={'column'}
          pt={{ base: '40px', lg: 0 }}
          ps={{ base: '0px', lg: '40px' }}
        >
          <Text mb={'12px'}>Caneca</Text>
          <Stack mb="60px">
            <Text fontSize={'32px'} fontWeight={'300'}>
              {data?.name}
            </Text>
            <Text color="dark" fontSize={'20px'} fontWeight={'600'} mb="20px">
              {formatPriceInCentsToCurrency(data?.price_in_cents ?? 0)}
            </Text>
            <Text fontSize={'12px'}>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </Text>
          </Stack>
          <Stack flexGrow={1} maxW={'440px'}>
            <Text fontSize={'16px'} fontWeight={'500'}>
              DESCRIÇÃO
            </Text>
            <Text fontSize={'14px'}>{data?.description}</Text>
          </Stack>
          <Button
            mt={'auto'}
            leftIcon={<IconWhiteCart />}
            colorScheme="blue"
            bgColor={'#115D8C'}
            color="#fff"
            fontWeight={'500'}
            maxW={'440px'}
            onClick={handleAddToCart}
          >
            ADICIONAR AO CARRINHO
          </Button>
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Product
