
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";  //The combineReducers function is used to combine multiple reducers into a single reducer function. It takes an object with keys representing state slices and values as the reducers that manage those state values.
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);


// configureStore from redux/toolkit
export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[loggerMiddleware]
    //The Redux store object has an optional middleware property that accepts an array of middleware functions. These functions can intercept every action dispatched to the store.
})

