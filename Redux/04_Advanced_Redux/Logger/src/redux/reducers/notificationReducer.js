import { createSlice } from "@reduxjs/toolkit"
import { actions } from './todoReducer'
const initialState={
    message:""
}

const notificationSlice=createSlice({
    name:"notification",
    initialState:initialState,
    reducers:{
        reset:(state, action)=>{
            state.message="";
        }
    },
    // extraReducers:{
    //     "todo/add":(state, action)=>{
    //         state.message="Todo is created.";
    //     }
    // }


    //When extraReducers is defined as a function, it receives a builder instance that has an addCase method. This method takes an action creator and a case reducer function as parameters.
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add, (state, action)=>{
    //         state.message="Todo is created";
    //     })
    // }

    extraReducers:{
        [actions.add]: (state, action)=>{
            state.message="Todo is created";
        }
    }
})

export const notificationReducer=notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector=(state)=>state.notificationReducer.message;