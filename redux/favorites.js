import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name:"favorites",
    initialState:{
        favorites:[]
    },
    reducers:{
        addFavorite: (state,action) =>{
state.favorites.push(action.payload)
        },
        removeFavorite:(state,action)=>{
            state.favorites.splice(state.favorites.indexOf(action.payload),1)
        },
        setFavorites:(state,action) =>{
            state.favorites = action.payload
        }
    }
})

export default favoritesSlice.reducer

export const setFavorites = favoritesSlice.actions.setFavorites
export const addFavorite = favoritesSlice.actions.addFavorite
export const removeFavorite = favoritesSlice.actions.removeFavorite 