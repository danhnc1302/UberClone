import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import basketSlice from './basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
    }
})

setupListeners(store.dispatch)