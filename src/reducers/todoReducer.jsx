import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state,action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        }
    }
})

export const {add} = todoReducer.actions;

export default todoReducer.reducer;