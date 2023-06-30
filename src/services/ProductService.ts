import api from '@/api'
import { ProductFetchResponse } from '@/types/Fetch/ProductFetchResponse'
import { ProductsFetchResponse } from '@/types/Fetch/ProductsFetchResponse'
import { AxiosPromise } from 'axios'

const get = (productId: string): AxiosPromise<ProductFetchResponse> => {
  const query = `query {
    Product(id: "${productId}"){
      id
      name
      price_in_cents
      image_url
      category
      description
    }
  }`

  const response = api.post('/', { query })

  return response
}

const getAll = (query: string): AxiosPromise<ProductsFetchResponse> => {
  const response = api.post('/', { query })

  return response
}

const ProductService = { getAll, get }

export default ProductService
