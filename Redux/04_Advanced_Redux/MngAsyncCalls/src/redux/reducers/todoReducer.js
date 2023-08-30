import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

//createAsyncThunk('action',callbackfunc)

export const getInitialStateAsync = createAsyncThunk(
    'todo/getInitialState',
    // (arg,thunkAPI)=>{
    //     axios.get("http://localhost:4100/api/todos")
    //         .then(res=>{  //used 'then' when returns promise
    //         console.log(res.data);
    //         thunkAPI.dispatch(actions.setInitialState(res.data));
    //         })
    // }
    ()=>{
        return axios.get("http://localhost:4100/api/todos");
    }
)

export const addToDOAsync = createAsyncThunk(
    'todo/addTodo',
    async(payload)=>{
        const response=await fetch("http://localhost:4100/api/todos",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                text:payload,
                completed: false
            })
        });

        return response.json();
    }
)
// Creating Reducer using Redux Toolkit

const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        setInitialState:(state, action)=>{
            state.todos=[...state.payload];
        },
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
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled, (state, action)=>{
            state.todos=[...action.payload.data]
        })
        .addCase(addToDOAsync.fulfilled, (state, action)=>{
            state.todos.push(action.payload);
        })
    }
});

export const todoReducer=todoSlice.reducer;

export const actions = todoSlice.actions;

// selector
export const todoSelector = (state)=>state.todoReducer.todos;



// Reducer using redux

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
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }