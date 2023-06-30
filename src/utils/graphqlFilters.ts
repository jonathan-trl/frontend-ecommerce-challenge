import { Filter } from '@/types/Filter'
import { Priority } from '@/types/Priority'

export const getCategoryByType = (type: Filter) => {
  if (type == Filter.MUGS) return 'mugs'
  if (type == Filter.SHIRT) return 't-shirts'
  return ''
}

export const getFieldByPriority = (priority: Priority) => {
  if (priority == Priority.NEWS) return { field: 'created_at', order: 'ASC' }
  if (priority == Priority.BIGGEST_PRICE)
    return { field: 'price_in_cents', order: 'DSC' }
  if (priority == Priority.MINOR_PRICE)
    return { field: 'price_in_cents', order: 'ASC' }
  return { field: 'sales', order: 'DSC' }
}

export const mountQuery = (type: Filter, priority: Priority) => {
  if (type === Filter.ALL && priority === Priority.POPULARITY)
    return `query {
	allProducts(sortField: "sales", sortOrder: "DSC"){
    id
    name
    price_in_cents
    image_url
    category
  }
}`

  const sortSettings = getFieldByPriority(priority)
  const category = getCategoryByType(type)
  const categoryFilter = category
    ? `filter:
    {category: "${getCategoryByType(type)}"}`
    : ''

  return `query {
	allProducts(${categoryFilter},
    sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}"
  ){
    id
    name
    price_in_cents
    image_url
    category
  }
}`
}