import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

const CartQuantityItems = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w={'20px'}
      h={'20px'}
      bgColor={'#DE3838'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'50%'}
    >
      {children}
    </Flex>
  )
}

export default CartQuantityItems
