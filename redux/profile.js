import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name:"profile",
    initialState:{
   user:{    
    firstName:"",
   lastName:"",
   uid:"",
   email:""}
    },
    reducers:{
        setProfile:(state,action)=>{
            state.user = action.payload
        }
    }
})

export default profileSlice.reducer

export const setProfile = profileSlice.actions.setProfile