'use client'
import ButtonBack from '@/components/ButtonBack'
import CartItem from '@/components/CartItem'
import CartResume from '@/components/CartResume'
import Container from '@/components/Container'
import useLocalStorage from '@/stores/useLocalStorage'
import { CartProduct } from '@/types/CartProduct'
import formatPriceInCentsToCurrency from '@/utils/formatPriceInCentsToCurrency'
import { Box, Flex, Text } from '@chakra-ui/react'

const Cart = () => {
  const useCartStore = useLocalStorage<CartProduct[]>('cart-items', [])

  const { value, updateLocalStorage } = useCartStore()

  const calculateTotal = (value: CartProduct[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    )
  }

  const cartTotal = formatPriceInCentsToCurrency(calculateTotal(value))
  const deliveryPrice = 4000
  const cartTotalWithDelivery = formatPriceInCentsToCurrency(
    calculateTotal(value) + deliveryPrice
  )

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item
      return { ...item, quantity }
    })

    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    if (confirm('Deseja realmente excluir?') == true) {
      const newValue = value.filter((item) => {
        if (item.id !== id) return item
      })
      updateLocalStorage(newValue)
    }
  }
  return (
    <Container>
      <ButtonBack />
      <Flex
        justifyContent={'space-between'}
        gap="30px"
        flexDir={{ base: 'column', xl: 'row' }}
        alignItems={'flex-start'}
      >
        <Box maxW={{ base: '100%', xl: '70%' }}>
          <Text fontSize={'24px'} fontWeight={'500'} mb={'10px'}>
            SEU CARRINHO
          </Text>
          <Text fontSize={'16px'} mb={'25px'}>
            Total ({value.length} produtos){' '}
            <Text as={'span'} fontWeight={'600'}>
              {cartTotal}
            </Text>
          </Text>
          <Flex flexDir={'column'} gap={'15px'}>
            {value.map((product) => (
              <CartItem
                handleDeleteItem={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
                product={{ ...product }}
                key={product.id}
              />
            ))}
          </Flex>
        </Box>
        <Flex w={{ base: '100%', xl: '400px' }}>
          <CartResume
            cartTotal={cartTotal}
            deliveryPrice={formatPriceInCentsToCurrency(deliveryPrice)}
            cartTotalWithDelivery={cartTotalWithDelivery}
          />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Cart
