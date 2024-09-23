import {createSlice, nanoid } from '@reduxjs/toolkit'
//nanoid generates unique IDs.

//store ma suru ma initaial state hunxa
//initial state: obj or arrays
const initialState= {
  todos : [{ id:1, text: "Hello World"}]
}


//REDUCERS
//createSlice takes obj as param.
// slice encapsulates app's state,actions, and reducers.
const todoSlice = createSlice({
    name: 'todo',

    //Defining the state for the store and slice
    initialState,

    //reducers: has properties and functions
    reducers: {
       

        addTodo: (state, action )=>{

            const todo={
                id: nanoid(),
                text: action.payload //action ma naya todo ko text aauxa, check .md
            }
            //state update:
            state.todos.push(todo)
        },


         //function reference or defn
        removeTodo: (state, action)=>{
            //action ma id aako hunxa
            state.todos= state.todos.filter((todo)=>todo.id!==action.payload )
        },
    }
})

//export functionalities : or action creation via todoSlice.actions
export const {addTodo, removeTodo}= todoSlice.actions

//exporting references to reducer function
export default todoSlice.reducer
// this todoSlice.reducer is renamed to todoReducer, no need to explicitly mention
