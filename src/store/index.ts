import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
export const store = configureStore({
  reducer: {
    todos: todoSlice,
    // user: userSlice
  }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>