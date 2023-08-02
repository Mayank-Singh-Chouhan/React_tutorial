import React from "react";

function App() {
    let currDate = new Date();
    currDate = currDate.getHours();

    let greeting = "";
    let style = {};

    if (currDate >= 1 && currDate < 12) {
        greeting = "Good Morning";
        style.color = "#ADD8E6";
    } else if (currDate >= 12 && currDate < 19) {
        greeting = "Good Afternoon";
        style.color = "orange";
    } else {
        greeting = "Good Night";
        style.color = "#00008b";
    }

    return (
        <>
            <div>
                <h1>
                    Hello sir, <span style={style}>{greeting}</span>
                </h1>
            </div>
        </>
    );
}

export default App;