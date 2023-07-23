import React from "react";
import ReactDOM from "react-dom";


const fname = "Mayank";
const mname = "Singh";
const lname = "Chouhan";

// ReactDOM.render(
//     <>
//         <h1>My name is {fname} {mname} {lname}</h1>
//         <p>My lucky number is {10 + 2}</p>

//     </>, document.getElementById("root")
// );



// ReactDOM.render(
//     <>
//         <h1>My name is {fname + " " + mname + " " + lname}</h1>
//         <p>My lucky number is {10 + 2}</p>

//     </>, document.getElementById("root")
// );



// preferred and most efficient method

ReactDOM.render(
    <>
        <h1>{`My first name is ${fname} ${mname} ${lname}`}</h1>
        <p>My lucky number is {10 + 2}</p>

    </>, document.getElementById("root")
);