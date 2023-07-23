import React from "react";
import ReactDOM from "react-dom";

// if you want to write an expression inside jsx you can do it 
// you just have to write in inside {}

const name = "Mayank Singh Chouhan";

ReactDOM.render(
    <>
        <h1>My name is {name}</h1>
        <p>My lucky number is {10 + 2}</p>

    </>, document.getElementById("root")
);


// you can only do this with expressions not with statements
// following will give an error

// ReactDOM.render(
//     <>
//         <h1>My name is {name}</h1>
//         <p>My lucky number is {
//             if(1 < 0) {
//                 console.log("YES");
//             } else {
//                 console.log("NO");
//             }
//         }</p>

//     </>, document.getElementById("root")
// );