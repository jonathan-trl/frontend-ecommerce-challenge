'use client'

import useFilter from '@/stores/useFilter'
import useLocalStorage from '@/stores/useLocalStorage'
import { CartProduct } from '@/types/CartProduct'
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import CartIcon from './CartIcon'
import CartQuantityItems from './CartQuantityItems'
import SearchIcon from './SearchIcon'

const Navbar = () => {
  const useCartStore = useLocalStorage<CartProduct[]>('cart-items', [])

  const { value } = useCartStore()
  const { search, setSearch } = useFilter()

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
  }

  return (
    <Flex
      bgColor={'#fff'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      p={{ base: '35px 20px ', lg: '35px 160px' }}
      alignItems={'center'}
    >
      <Box>
        <Heading
          color="title"
          fontSize={'40px'}
          fontWeight={400}
          as="a"
          href="/"
        >
          capputeeno
        </Heading>
      </Box>
      <Flex alignItems={'center'}>
        <InputGroup bgColor={'#F3F5F6'} minW={'350px'} borderRadius={'8px'}>
          <Input
            value={search}
            onChange={handleSearchChange}
            placeholder="Procurando por algo?"
            border={0}
          />

          <InputRightElement pointerEvents="none" mr={'10px'}>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <Box ml={'20px'}>
          <Link href="/cart" pos={'relative'}>
            <CartIcon />
            <Box pos={'absolute'} bottom={'-10px'} right={'-10px'}>
              <CartQuantityItems>
                <Text color="#fff" fontSize={'12px'}>
                  {value.length}
                </Text>
              </CartQuantityItems>
            </Box>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar
