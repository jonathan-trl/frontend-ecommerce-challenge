'use client'

import useProducts from '@/hooks/useProducts'
import { SimpleGrid } from '@chakra-ui/react'
import ProductCatalog from './ProductCatalog'

const Catalog = () => {
  const { data } = useProducts()
  return (
    <SimpleGrid
      gap="30px"
      gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'}
      mt={'40px'}
    >
      {data?.map((product) => (
        <ProductCatalog {...product} key={product.id} />
      ))}
    </SimpleGrid>
  )
}

export default Catalog
