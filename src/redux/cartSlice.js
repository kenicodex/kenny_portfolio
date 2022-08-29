import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addcart: (state , action) => {
            if (state.find(x => x.id === action.payload.product.id) === undefined) { // check if already in cart
                let newProductObj = Object.assign(action.payload.product, { number: action.payload.number })
                console.log(newProductObj);
                state.push(action.payload.product)
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
        },
        toogle: (state, action) => {
            state[action.payload.id].done = !state[action.payload.id].done
        }
    }
})
export const { addcart, increase, decrease, deletecart, toogle } = cartSlice.actions;

export default cartSlice.reducer;