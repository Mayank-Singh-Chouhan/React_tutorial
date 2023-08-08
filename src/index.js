import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// spread operator

// case 1 ***************************
// const fullname = ["Mayank", "Singh", "Chouhan"];
// const biodata = [1, ...fullname, 21, "male"];

// console.log(fullname);
// console.log(biodata);

// case 2 ***************************
// const shooterGames = ["call of duty", "far cry", "resident evil"];
// const racingGames = ["need for speed", "gran turismo", "burnout"];

// const games = [...shooterGames, ...racingGames];

// console.log(games);

// case 3 ***************************
// const [first, ...remaining] = shooterGames;

// console.log(first);
// console.log(remaining);

// case 4 ***************************
const fullname = {
    fname: "Mayank",
    lname: "Chouhan"
};

const biodata = {
    id: 1,
    ...fullname,
    age: 21,
    gender: "male"
};

console.log(fullname);
console.log(biodata);