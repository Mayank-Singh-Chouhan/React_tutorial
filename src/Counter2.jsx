import React from "react";
import useCounter from "./useCounter";

const Counter2 = () => {

    const [count, increment, decrement] = useCounter();

    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    );
}

export default Counter2;