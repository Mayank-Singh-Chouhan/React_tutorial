import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let currDate = new Date(2023, 8, 2, 5);
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

ReactDOM.render(
    <>
        <div>
            <h1>
                Hello sir, <span style={style}>{greeting}</span>
            </h1>
        </div>

    </>, document.getElementById("root")
);