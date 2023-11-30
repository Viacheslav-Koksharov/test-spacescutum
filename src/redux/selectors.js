import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = state => state.todos.items;

export const selectIsLoading = state => state.todos.isLoading;

export const selectError = state => state.todos.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (todos, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return todos.filter(todo => !todo.completed);
      case statusFilters.completed:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], todos => {

  return todos.reduce(
    (count, todos) => {
      if (todos.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

