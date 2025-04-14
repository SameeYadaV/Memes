import { createSlice } from "@reduxjs/toolkit";

export const dataSlice=createSlice({
    name:"data",
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            return action.payload;
        }
    }
})

export const dataAction=dataSlice.actions;