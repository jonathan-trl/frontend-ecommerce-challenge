import ProductService from '@/services/ProductService'
import useFilter from '@/stores/useFilter'
import { mountQuery } from '@/utils/graphqlFilters'
import { useQuery } from '@tanstack/react-query'
import { useDeferredValue } from 'react'

const useProducts = () => {
  const { type, priority, search } = useFilter()

  const searchDeffered = useDeferredValue(search)

  const query = mountQuery(type, priority)

  const { data } = useQuery({
    queryKey: ['products', type, priority],
    queryFn: () => ProductService.getAll(query),
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  const allProducts = data?.data.data.allProducts

  const filteredProducts = allProducts?.filter((product) =>
    product.name.toLowerCase().includes(searchDeffered.toLowerCase())
  )

  return {
    data: filteredProducts,
  }
}

export default useProducts
