// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notes:[
        {text:'ddd fsfds ssf fsfs . sfs kdkdk', createdOn: new Date().toDateString()},
        {text:'ddd fsfzcds  sdsdfs ss  kfkk ssf fsfs . sfs kdkdk', createdOn: new Date().toDateString()}
    ]
};

// export function noteReducer(state=initialState, action){
//     switch(action.type){

//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }

//         case DELETE_NOTE:
//             state.notes.splice(action.index, 1);
//             return {
//                 ...state,
//                 notes: [...state.notes]
//             }

//         default:
//             return state;

//     }
// }


// Reducer using redux toolkit

const noteSlice= createSlice({
    name:'note',
    initialState: initialState,
    reducers:{
        add:(state, action)=>{
            state.notes.push({
                text: action.payload,
                createdOn: new Date().toDateString()
            })
        },
        delete:(state, action)=>{
            state.notes.splice(action.payload, 1)
        }
    }
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;

export const noteSelector= (state)=>state.noteReducer.notes;