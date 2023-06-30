import { create } from 'zustand'

type CountCartLengthProps = {
  cartLength: number
  setCartLength: (cartLength: number) => void
}

const cartItems = localStorage.getItem('cart-items')
const initialCartLength = cartItems ? JSON.parse(cartItems).length : 0

const useCountCartLength = create<CountCartLengthProps>((set) => ({
  cartLength: initialCartLength,
  setCartLength: (value) => set(() => ({ cartLength: value })),
}))

export default useCountCartLength
