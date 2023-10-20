import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:"categories",
    initialState:{
        categories:[]
    },
    reducers:{
       
        setCategories:(state,action) =>{
            state.categories = action.payload
        }
    }
})

export default categorySlice.reducer

export const setCategories = categorySlice.actions.setCategories
