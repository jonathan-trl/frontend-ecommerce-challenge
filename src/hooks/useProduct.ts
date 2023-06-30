import ProductService from '@/services/ProductService'
import { useQuery } from '@tanstack/react-query'

const useProduct = (productId: string) => {
  const { data } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => ProductService.get(productId),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return {
    data: data?.data.data.Product,
  }
}

export default useProduct
