import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () =>{

    console.log("inside counter");

    const count = useSelector( (state) => state.counter.value);
    const dispatch = useDispatch(); // to use the functions in the slices

    <div>
        <button 
            onClick={() => dispatch(increment())}>
            increment
        </button>
            <br />
        <div>
            {count}
        </div>
            <br />
        <button
            onClick={() => dispatch(decrement())}>
            decrement
        </button>
    </div>
}

export default Counter;