'use client'

import useFilter from '@/stores/useFilter'
import { Filter } from '@/types/Filter'
import { Priority } from '@/types/Priority'
import { Flex, Select, Text } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

const Filters = () => {
  const { type, setType, priority, setPriority } = useFilter()

  const handleFilterType = (value: Filter) => {
    setType(value)
  }

  const handleFilterPriority = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Priority
    setPriority(value)
  }

  return (
    <Flex
      justifyContent={'space-between'}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Flex gap="40px" alignItems={'flex-start'} mb={{ base: '20px', lg: '0' }}>
        <Text
          cursor={'pointer'}
          fontSize={'16px'}
          color={'#41414D'}
          fontWeight={type == Filter.ALL ? '600' : '400'}
          borderBottom={type == Filter.ALL ? '4px solid #FFA585' : '0'}
          onClick={() => handleFilterType(Filter.ALL)}
        >
          TODOS OS PRODUTOS
        </Text>
        <Text
          cursor={'pointer'}
          fontSize={'16px'}
          color={'#737380'}
          fontWeight={type == Filter.SHIRT ? '600' : '400'}
          borderBottom={type == Filter.SHIRT ? '4px solid #FFA585' : '0'}
          onClick={() => handleFilterType(Filter.SHIRT)}
        >
          CAMISETAS
        </Text>
        <Text
          cursor={'pointer'}
          fontSize={'16px'}
          color={'#737380'}
          fontWeight={type == Filter.MUGS ? '600' : '400'}
          borderBottom={type == Filter.MUGS ? '4px solid #FFA585' : '0'}
          onClick={() => handleFilterType(Filter.MUGS)}
        >
          CANECAS
        </Text>
      </Flex>
      <Flex
        flexDirection={'column'}
        alignItems={{ base: 'flex-start', lg: 'flex-end' }}
        flexWrap={'wrap'}
      >
        <Select
          placeholder="Organizar por"
          border={0}
          maxW={'200px'}
          mb={{ base: '10px', lg: '20px' }}
          onChange={handleFilterPriority}
        >
          <option value="NEWS">Novidades</option>
          <option value="BIGGEST_PRICE">Preço: Maior - menor</option>
          <option value="MINOR_PRICE">Preço: Menor - maior</option>
          <option value="POPULARITY">Mais vendidos</option>
        </Select>
        {/* <Flex gap="10px" flexWrap={'wrap'}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>{'<'}</Button>
          <Button>{'>'}</Button>
        </Flex> */}
      </Flex>
    </Flex>
  )
}

export default Filters
