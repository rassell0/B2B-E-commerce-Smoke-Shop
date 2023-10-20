import { configureStore } from "@reduxjs/toolkit";
import favorites from "./favorites"
import profile from "./profile";
import cart from "./cart";
import category from "./category";
export const store = configureStore({
    reducer:{
        favorites,
        profile,
        cart,
        category
    }
})