'use client'

import { Product } from '@/types/Product'
import formatPriceInCentsToCurrency from '@/utils/formatPriceInCentsToCurrency'
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'

const Product = (product: Product) => {
  const { id, image_url, name, price_in_cents } = product
  return (
    <Link href={`product/${id}`}>
      <Card minH={'380px'}>
        <Image
          height={'300px'}
          objectFit={'cover'}
          src={image_url}
          alt="Green double couch with wooden legs"
        />
        <CardBody py={'10px'}>
          <Text fontSize={'16px'} fontWeight={'300'}>
            {name}
          </Text>
        </CardBody>
        <CardBody py={0}>
          <Divider />
        </CardBody>
        <CardFooter py={'10px'}>
          <Text color="#09090A" fontSize="14px" fontWeight={'600'}>
            {formatPriceInCentsToCurrency(price_in_cents)}
          </Text>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default Product
