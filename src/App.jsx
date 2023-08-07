import React, { useState } from "react";

const App = () => {
    const iniBg = "blueviolet";

    const [bg, setBg] = useState(iniBg);
    const [name, setName] = useState("click me");

    const bgChange = () => {
        let newBg = "#34495e";

        setBg(newBg);
        setName("Ouch ! 😲");
    }

    const bgBack = () => {
        setBg(iniBg);
        setName("click me");
    }

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                {/* <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button> */}
                <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
            </div>
        </>
    );
}

export default App;