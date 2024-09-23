import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

//configureStore is a function to create a Redux Store instance
// it takes object as an argument
export const store = configureStore({
    reducer: todoReducer
})

