import { configureStore } from '@reduxjs/toolkit'
import switchDrictionSlice from "./toggledirction"
export  const store = configureStore({
    reducer: {
        switchDrictionSlice
    },
  })