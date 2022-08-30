import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addcart: (state, action) => {
            if (state.find(x => x.id === action.payload.product.id) === undefined) { // check if already in cart
                let newProductObj = Object.assign(action.payload.product, { number: action.payload.number, inCart : true })
                console.log(newProductObj);
                state.push(action.payload.product)
            } else {
                // alert("setting from redux")
                // sessionStorage.setItem('cartStatus', true)
                // setTimeout(() => {
                //     sessionStorage.removeItem('cartStatus')
                // }, 3000);
            }
        },
        increase: (state, action) => {
            if (state[action.payload.index].number < state[action.payload.index].stock) {
                state[action.payload.index]["number"] = state[action.payload.index]["number"] + 1
            }
        },
        decrease: (state, action) => {
            if (state[action.payload.index].number !== 1) {
                state[action.payload.index]["number"] = state[action.payload.index]["number"] - 1
            }
        },
        deletecart: (state, action) => {
            return state.filter(x => x.id !== action.payload.id)
        }
    }
})
export const { addcart, increase, decrease, deletecart } = cartSlice.actions;

export default cartSlice.reducer;