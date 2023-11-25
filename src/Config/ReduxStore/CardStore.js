import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem: [],
    totalAmount: 0,
    totalQuantity: 0,

}

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addToStore: (state, data) => {
            const newItem = (data.payload)
            const existingItem = state.cartItem.find(
                (item) => item.id === item.id
            );
            state.totalQuantity++
            if (!existingItem) {
                state.cartItem.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) +
                    Number(newItem.price)
            }

            state.totalAmount = state.cartItem.reduce((total, item) => total +
                Number(item.price) * Number(item.quantity))

              
        },
            
    },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer