import { createSlice } from "@reduxjs/toolkit";
let id = 0
export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const incoming = {
                id: id++,
                item: action.payload.payload,
                done: false,
                date: "20-03-2022"
            }
            state.push(incoming)
        },
        deleteTodo: (state, action) => {
            return state.filter(x => x.id !== action.payload.id)
        },
        toogle: (state, action) => {
            state[action.payload.id].done =  !state[action.payload.id].done
            // return state
        }
    }
})
export const { addTodo, deleteTodo, toogle } = todoSlice.actions;

export default todoSlice.reducer;