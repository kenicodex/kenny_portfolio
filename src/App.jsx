import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portfolio from "./components/Portofilio/Portfolio";
import Todolist from "./components/Todolist/TodoList";
import { Provider } from "react-redux";
import todoReducer from './redux/reducers'
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer /* , persistStore */ } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import thunk from 'redux-thunk';

function App(params) {
    const persistConfig = {
        key: 'todo',
        version: 1,
        storage
    }
    const persisReducer = persistReducer(persistConfig, todoReducer)
    const store = configureStore({
        reducer: persisReducer,
        // devTools: process.env.NODE_ENV !== 'production',
        // middleware: [thunk]
    })
    // const persistor = persistStore(store)
    return (
        <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Portfolio />} exact />
                        <Route path="/todolist" element={<Todolist />} />
                        {/* <Route path="/landingpage" element={<Portfolio />}  /> */}

                    </Routes>
                </BrowserRouter>
            {/* </PersistGate> */}
        </Provider>
    )
}
export default App;