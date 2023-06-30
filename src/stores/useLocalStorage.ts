import { create } from 'zustand'

type LocalStorageProps<T> = {
  value: T
  updateLocalStorage: (value: T) => void
}

const useLocalStorage = <T>(key: string, initialValue: T) =>
  create<LocalStorageProps<T>>((set) => ({
    value: (() => {
      const storedValue = localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    })(),
    updateLocalStorage: (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      set({ value: newValue })
    },
  }))

export default useLocalStorage
