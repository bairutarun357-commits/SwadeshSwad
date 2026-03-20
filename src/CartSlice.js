import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(
        item => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeCart: (state, action) => {
      return state.filter(
        item => item.name !== action.payload.name
      );
    },

    increment: (state, action) => {
      const item = state.find(
        item => item.name === action.payload.name
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.find(
        item => item.name === action.payload.name
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // remove if 0
          return state.filter(
            i => i.name !== action.payload.name
          );
        }
      }
    },

    clearCart: () => {
      return [];
    }
  }
});

export const {
  addToCart,
  removeCart,
  increment,
  decrement,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;