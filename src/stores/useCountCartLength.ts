import { create } from 'zustand'

type CountCartLengthProps = {
  cartLength: number
  setCartLength: (cartLength: number) => void
}

let initialCartLength = 0

if (typeof window !== 'undefined') {
  const cartItems = localStorage.getItem('cart-items')
  initialCartLength = cartItems ? JSON.parse(cartItems).length : 0
}

const useCountCartLength = create<CountCartLengthProps>((set) => ({
  cartLength: initialCartLength,
  setCartLength: (value) => set(() => ({ cartLength: value })),
}))

export default useCountCartLength
