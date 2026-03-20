import { createSlice } from "@reduxjs/toolkit";

const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

let OrderSlice = createSlice({
  name: "orders",
  initialState: savedOrders,

  reducers: {
    addOrder: (state, action) => {
      // ✅ prevent duplicate orders (same id)
      const exists = state.find(order => order.id === action.payload.id);

      if (!exists) {
        state.push(action.payload);

        // ✅ save to localStorage
        localStorage.setItem("orders", JSON.stringify(state));
      }
    }
  }
});

export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer;