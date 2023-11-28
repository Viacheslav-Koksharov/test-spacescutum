import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/todos-api';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { data } = await api.getTodos();
  return data;
});

export const addTodo = createAsyncThunk(
  'todos/add',
  async ({ title, completed, userId }) => {
    const { data } = await api.postTodo({ title, completed, userId });
    return data;
  },
);

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async id => {
  await api.delTodo(id);
  return id;
});

export const toggle = createAsyncThunk(
  'todos/toggleCompleted',
  async ({ id, title, completed, userId }) => {
    const { data } = await api.toggle(id, {
      completed: !completed,
      title,
      userId,
    });
    return data;
  },
);
