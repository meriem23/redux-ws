import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

const CounterGroupH = () => {
    const myCounter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    console.log(dispatch);
    return (
        <div>
            <h1>{myCounter.age}</h1>
            <div>
                <button onClick={() => dispatch({ type: "INCRMENT", payload: 10 })}>+10</button>
                <h1>{myCounter.count}</h1>
                <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>-5</button>
                <br />
                <button onClick={() => dispatch({ type: 'RESET', payload: 0 })}>RESET</button>
            </div>
        </div>
    );
};

export default CounterGroupH;
