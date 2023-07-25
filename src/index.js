import React from "react";
import ReactDOM from "react-dom";

const name = "Mayank Singh Chouhan";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
        <h1>Hello, My name is {name}</h1>
        <p>Date - {date}</p>
        <p>Time - {time}</p>

    </>, document.getElementById("root")
);