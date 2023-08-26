const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i===action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }


// Creating Reducer using Redux Toolkit   (@reduxjs/toolkit)
/*
 * A createSlice() function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * The `reducer` argument is passed to `createReducer()`.
 *
 * @public
 */
const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state, action)=>{
            state.todos.push({
                text:action.payload,
                completed: false
            })
        },
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i===action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
        }
    }
});

export const todoReducer= todoSlice.reducer;
export const actions = todoSlice.actions;

export const todoSelector = (state)=>state.todoReducer.todo;