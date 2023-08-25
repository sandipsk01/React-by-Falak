
// const redux = require("redux");

import * as redux from "redux";
import { combineReducers } from "redux";  //The combineReducers function is used to combine multiple reducers into a single reducer function. It takes an object with keys representing state slices and values as the reducers that manage those state values.
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const result = combineReducers({
    todoReducer,
    noteReducer
})

export const store = redux.createStore(result);

