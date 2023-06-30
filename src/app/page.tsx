import Catalog from '@/components/Catalog'
import Container from '@/components/Container'
import Filters from '@/components/Filters'

export default function Home() {
  return (
    <Container>
      <Filters />
      <Catalog />
    </Container>
  )
}
