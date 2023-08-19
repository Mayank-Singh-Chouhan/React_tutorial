import React from "react";
import useCounter from "./useCounter";

const Counter1 = () => {

    const [count, increment, decrement] = useCounter(10);

    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    );
}

export default Counter1;