import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, toggle } from "./operations.js";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null

  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.pending, handlePending)
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [payload, ...state.items];
      })
      .addCase(addTodo.rejected, handleRejected)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(task => task.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(toggle.pending, handlePending)
      .addCase(toggle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const updatedTodo = payload;
        state.items = state.items.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
      })
      .addCase(toggle.rejected, handleRejected)
  },
});

export const tasksReducer = tasksSlice.reducer;