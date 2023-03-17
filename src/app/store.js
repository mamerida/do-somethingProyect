import { configureStore } from "@reduxjs/toolkit";

//reducer 
import DoSomethingReducers from '../reducers/thingsToDoReducer'

//se crea el store de mi app
export default configureStore({
    reducer: {
        something: DoSomethingReducers
    }
})