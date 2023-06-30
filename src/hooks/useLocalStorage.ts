import useCountCartLength from '@/stores/useCountCartLength'
import { useEffect, useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
  const { setCartLength } = useCountCartLength()

  let parsedValue = initialValue

  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key)
    parsedValue = storedValue ? JSON.parse(storedValue) : initialValue
  }

  const [value, setValue] = useState<T>(parsedValue)

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  }

  useEffect(() => {
    setCartLength((value as T[]).length)
  }, [value])

  return { value, updateLocalStorage }
}

export default useLocalStorage
