import { Filter } from '@/types/Filter'
import { Priority } from '@/types/Priority'
import { create } from 'zustand'

type FilterProps = {
  search: string
  page: number
  type: Filter
  priority: Priority
  setPriority: (value: Priority) => void
  setSearch: (value: string) => void
  setPage: (value: number) => void
  setType: (value: Filter) => void
}

const useFilter = create<FilterProps>((set) => ({
  search: '',
  page: 0,
  type: Filter.ALL,
  priority: Priority.POPULARITY,
  setPriority: (value) => set(() => ({ priority: value })),
  setSearch: (value) => set(() => ({ search: value })),
  setPage: (value) => set(() => ({ page: value })),
  setType: (value) => set(() => ({ type: value })),
}))

export default useFilter
