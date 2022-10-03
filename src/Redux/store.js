import { configureStore } from '@reduxjs/toolkit'
import todo from './Slices/TodoSlice';
export const store = configureStore({
  reducer: {
    todo
  },
})