import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portfolio from "./components/Portofilio/Portfolio";
import Todolist from "./components/Todolist/TodoList";
import { Provider } from "react-redux";
import Movies from "./components/Movies/Movies.jsx";
import Movie from "./components/Movies/movie";
import Store from "./components/ecommerce/Home/Home";
import SingleProduct from "./components/ecommerce/Product/Product";
import Cart from "./components/ecommerce/Cart/Cart";
import store from "./redux/store";

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);
function App(params) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} exact />
                    <Route path="/todolist" element={<Todolist />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="/fakestore" element={<Store />}  />
                    <Route path="/product" element={<SingleProduct />}  />
                    <Route path="/cart" element={<Cart />}  />
                </Routes>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}
export default App;