import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todoslice",
    initialState: initialState,
    reducers: {
        addTodos: (state,action) => {
            state.todos.push(action.payload);
        },
        deleteTodos: (state,action) => {
            const newItems = state.todos.filter((item,index) => {
                return index !== action.payload;
            });
            state.todos = newItems;
        },
    },

});

export const {addTodos,deleteTodos} = todoSlice.actions;
export default todoSlice.reducer;