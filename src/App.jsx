import React, { useState } from "react";

const App = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const UpdateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    return (
        <>
            <h1> {time} </h1>
            <button onClick={UpdateTime}> Get Time </button>
        </>
    );
}

export default App;