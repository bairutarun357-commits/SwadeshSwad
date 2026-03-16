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
      const itemIndex = state.findIndex(
        item => item.name === action.payload.name
      );

      if (itemIndex!=-1) {
        state.splice(itemIndex,1);
      } 
    
      
        
      
    },
       increment: (state, action) => {
      const itemi = state.find(
        item => item.name === action.payload.name
      );

      if (itemi) {
        itemi.quantity += 1;
      }
        
      
    },
     decrement: (state, action) => {
      const itemd = state.find(
        item => item.name === action.payload.name
      );

      if (itemd) {
        itemd.quantity -= 1;


          if (itemd.quantity === 0) {
          const index = state.findIndex(
            item => item.name === action.payload.name
          );
          state.splice(index, 1);
        }
      }

        
      
    },
    clearCart:()=> { return []}


  }
});

export const { addToCart,removeCart,increment,decrement,clearCart } = cartSlice.actions;
export default cartSlice.reducer;