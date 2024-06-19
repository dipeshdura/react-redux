import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key:"root",
    version:1,
    storage
}
const rootReducer =combineReducers({
    todos:todoReducer
})

const persistedReducer =persistReducer(persistConfig,rootReducer)

export const store =configureStore({
    reducer:persistedReducer
})

export const persistor =persistStore(store);