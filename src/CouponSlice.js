import { createSlice } from "@reduxjs/toolkit";
import { coupons } from "./coupon";

const couponSlice = createSlice({
    name:"coupon",
    initialState:{
        code:"",
        discount:0,
        applied:false,
        message:"",
    },
    reducers:{
        applycoupon:(state,action) => {
            const enteredCode = action.payload.toUpperCase();
            if(coupons[enteredCode]){
                state.code=enteredCode;
                state.discount=coupons[enteredCode];
                state.applied=true;
                state.message=`Coupon "${enteredCode}" applied! you got ${coupons[enteredCode]}% off.`;
            }
            else
            {
                state.message =`Invalid coupon code Applied`
                state.applied=false;
                state.discount=0;
            }
        },
        resetCoupon: (state) => {
            state.code ="";
            state.discount=0;
            state.applied=false;
            state.message="";
        }
    }
})

export const { applycoupon , resetCoupon } =couponSlice.actions;
export default couponSlice.reducer