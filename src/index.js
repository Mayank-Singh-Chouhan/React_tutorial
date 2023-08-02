import React from "react";
import ReactDOM from "react-dom";
// import youtuber from "./App";

// you can use any name when importing default export
// import myfav from "./App"; 

// use the exact same name of for other(non default) export as in the file or you will get error
// import myfav, { favprog } from "./App";
import myfav, { favprog, myName, myNames } from "./App";

// if you wanna import all the exports from a file you can do this
// import * as ques from "./App";




ReactDOM.render(
    <>
        <ol>
            <li>Thapa</li>
            {/* <li>{youtuber}</li> */}
            <li>{myfav}</li>
            <li>{favprog}</li>
            <li>{myName()}</li>
            <li>{myNames()}</li>
        </ol>

        {/* <ol>
            <li>{ques.default}</li>
            <li>{ques.favprog}</li>
            <li>{ques.myName()}</li>
            <li>{ques.myNames()}</li>
        </ol> */}

    </>, document.getElementById("root")
);