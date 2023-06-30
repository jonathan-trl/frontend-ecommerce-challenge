import useCountCartLength from '@/stores/useCountCartLength'
import { useEffect, useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
  const { setCartLength } = useCountCartLength()
  const storedValue = localStorage.getItem(key)
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue

  const [value, setValue] = useState<T>(parsedValue)

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  useEffect(() => {
    console.log('caiu aqui')

    setCartLength((value as T[]).length)
  }, [value])

  return { value, updateLocalStorage }
}

export default useLocalStorage
