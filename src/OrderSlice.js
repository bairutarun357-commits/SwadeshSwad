import { createSlice } from "@reduxjs/toolkit";

let OrderSlice=createSlice({
    name:"orders",
    initialState:[],
    reducers:{
        addOrder:(state,action) => {
            state.push(action.payload);
        }

    }
})
export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer;