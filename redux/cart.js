import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
   cart:[]
    },
    reducers:{
        setCart:(state,action)=>{
            state.cart = action.payload
        },
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:()=>{

        }
    }
})

export default cartSlice.reducer
export const setCart = cartSlice.actions.setCart
export const addToCart = cartSlice.actions.addToCart