import { CartProduct } from '@/types/CartProduct'
import formatPriceInCentsToCurrency from '@/utils/formatPriceInCentsToCurrency'
import { Box, Flex, Image, Link, Select, Text } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import IconTrash from '../Icons/IconTrash'

interface CartItemProps {
  product: CartProduct
  handleUpdateQuantity(id: string, quantity: number): void
  handleDeleteItem(id: string): void
}

const CartItem = ({
  product: {
    id,
    category,
    description,
    image_url,
    name,
    price_in_cents,
    quantity,
  },
  handleUpdateQuantity,
  handleDeleteItem,
}: CartItemProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(id, Number(event.target.value))
  }

  return (
    <Flex borderRadius={'8px'} bgColor={'#fff'} w={'100%'}>
      <Box>
        <Image
          src={image_url}
          alt=""
          borderTopLeftRadius={'8px'}
          borderBottomLeftRadius={'8px'}
          height={'100%'}
          maxW={'200px'}
          maxH={'200px'}
        />
      </Box>
      <Flex
        flexDir={'column'}
        justifyContent={'space-between'}
        p={'15px 20px 20px 30px'}
      >
        <Flex justifyContent={'space-between'}>
          <Link href={`/product/${id}`}>
            <Text fontSize={'20px'}>{name}</Text>
          </Link>
          <Text cursor={'pointer'} onClick={() => handleDeleteItem(id)}>
            <IconTrash />
          </Text>
        </Flex>
        <Box>
          <Text fontSize={'14px'}>{description}</Text>
        </Box>
        <Flex justifyContent={'space-between'}>
          <Select w={'65px'} value={quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Select>
          <Text fontSize={'16px'} fontWeight={'600'} color={'dark'}>
            {formatPriceInCentsToCurrency(price_in_cents)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CartItem
