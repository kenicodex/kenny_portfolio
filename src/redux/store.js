import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import todoReducer from "./todoSlice";

import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    todo: todoReducer,
    cart: cartReducer           
   });

const persistedReducer = persistReducer(persistConfig,  reducers);


export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})