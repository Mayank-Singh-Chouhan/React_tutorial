import React, { useState } from "react";

const App = () => {
    // const state = useState();
    // console.log(state);

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    }

    const DecNum = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click Me for +1 </button>
            <button onClick={DecNum}> Click Me for -1</button>
        </>
    );
}

export default App;