'use client'

import useCountCartLength from '@/stores/useCountCartLength'
import useFilter from '@/stores/useFilter'
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
import { usePathname } from 'next/navigation'
import { ChangeEvent } from 'react'
import CartIcon from './CartIcon'
import CartQuantityItems from './CartQuantityItems'
import SearchIcon from './SearchIcon'

const Navbar = () => {
  const pathName = usePathname()
  const { search, setSearch } = useFilter()
  const { cartLength } = useCountCartLength()

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
  }

  return (
    <Flex
      bgColor={'#fff'}
      justifyContent={{ base: 'center', md: 'space-between' }}
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
        {pathName === '/' && (
          <InputGroup
            bgColor={'#F3F5F6'}
            minW={{ base: '250px', md: '350px' }}
            borderRadius={'8px'}
          >
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
        )}

        <Box ml={'20px'}>
          <Link href="/cart" pos={'relative'}>
            <CartIcon />
            {cartLength > 0 && (
              <Box pos={'absolute'} bottom={'-10px'} right={'-10px'}>
                <CartQuantityItems>
                  <Text color="#fff" fontSize={'12px'}>
                    {cartLength}
                  </Text>
                </CartQuantityItems>
              </Box>
            )}
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar
