import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

export const store = configureStore({ // yahan global store create hota , global state maintain krne ke liye
    reducer: {
        counter: CounterSlice
    },
})