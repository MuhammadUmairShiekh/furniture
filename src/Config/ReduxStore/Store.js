import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './CardStore'
const store = configureStore({
  reducer: {
    cart: cartSlice
  },
})

export default store