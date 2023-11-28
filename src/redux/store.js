// import { configureStore } from "@reduxjs/toolkit";
// import todosSlice from "./todos-slice";

// const store = configureStore({
//   reducer: {
//     todos: todosSlice,
//   }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./todos-slice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
    filters: filtersReducer,
  },
});