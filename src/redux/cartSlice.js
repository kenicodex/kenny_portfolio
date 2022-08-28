import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: false,
    reducers: {
        addcart: (state, action) => {
            // alert(action.payload.id);
            state.push(action.payload)
        },
        deletecart: (state, action) => {
            return state.filter(x => x.id !== action.payload.id)
        },
        toogle: (state, action) => {
            state[action.payload.id].done =  !state[action.payload.id].done
            // return state
        }
    }
})
export const { addcart, deletecart, toogle } = cartSlice.actions;

export default cartSlice.reducer;