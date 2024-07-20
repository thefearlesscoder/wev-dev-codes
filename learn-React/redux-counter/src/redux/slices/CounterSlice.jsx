import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:0,
}
export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) =>{
            state.value -= 1;
        }
    }
})
//action creators are generated for each case reducer function
export const{ increment, decrement} = CounterSlice.actions; // syntax to extract function inplemtations via
                                                            // destructuring
export default CounterSlice.reducer;