import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
    totalAmount: 0,
    totalQuantity: 0,
};

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToStore: (state, data) => {
//       const newItem = data.payload;
//       const existingItem = state.cartItem.find(
//         (item) => item.id === newItem.id
//       );
//       state.totalQuantity++;
//       if (!existingItem) {
//         state.cartItem.push({
//           id: newItem.id,
//           productName: newItem.productName,
//           imgUrl: newItem.imgUrl,
//           price: newItem.price,
//           quantity: 0,
//           totalPrice: newItem.price,
//         });
//       } else {
//         existingItem.quantity++;
//         existingItem.totalPrice=
//           Number(existingItem.totalPrice) + Number(newItem.price);
//       }

//       state.totalAmount = state.cartItem.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );
//     },

//     deleteItem: (state, data) => {
//       const id = data.payload;
//       const existingItem = state.cartItem.find((item) => item.id === id);
//       if (existingItem) {
//         state.cartItem = state.cartItem.filter((item) => item.id !== id);
//         state.totalQuantity = state.totalQuantity - existingItem.quantity;
//       }
//       state.totalAmount = state.cartItem.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );
//     },
//   },
// });

// export const cartActions = cartSlice.actions;

// export default cartSlice.reducer;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToStore: (state, data) => {
      const newItem = data.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1, // Initialize quantity to 1 for a new item
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteItem: (state, data) => {
      const id = data.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Decrement totalQuantity
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;