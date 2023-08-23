const redux= require('redux');

// Actions: Actions are objects that represent an intention to change the state.
const ADD_TODO="Add TODO";
const TOGGLE_TODO= "Toggle TODO";

// Action Creators: Action creators in Redux are functions that generate and return action objects.
const addToDo= (text)=>({text, type:ADD_TODO});
const toogleToDo= (index)=>({index, type:TOGGLE_TODO});

// Initial State
const initialState={
    todos:[]
}

// Reducers: Reducers are pure functions that take the current state and an action object as arguments and return a new state. It uses conditional statements to check the type of action. Must return updated state.
function todoReducer(state=initialState, action){

    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        comleted: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i==action.index){
                        todo.comleted= !todo.comleted;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }

}

// Creating Store
const store = redux.createStore(todoReducer);

// dispatch actions
store.dispatch(addToDo("Study at 8"));
store.dispatch(addToDo("Office at 9"));
store.dispatch(toogleToDo(0));

// Read data from store
console.log(store.getState());