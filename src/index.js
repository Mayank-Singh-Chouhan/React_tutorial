// var React = require('react');
import React from 'react';
// var ReactDom = require('react-dom');
import ReactDom from 'react-dom';

// ReactDom.render(<h1>Hello World</h1>, document.getElementById('root')); 




// babel will turn the above code into the below code
// You can also notice why importing react modeule is important
// now a days babel can import on its own


import { jsx as _jsx } from "react/jsx-runtime";

ReactDom.render(_jsx("h1", {
    children: "Hello World"
}), document.getElementById('root'));
    
    
// you don't even need to import react any more in this file babel will do it automatically
// visit this(https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) link to know more
    
// our original code did not need to import React to use JSX anymore! 
// (But we would still need to import React in order to use Hooks or other exports that React provides.)




// how to do above in pure javascript(no react no nothing)


var h1 = document.createElement("h1");
h1.innerHTML = "Maynk Singh Chouhan";
document.getElementById("root").appendChild(h1);



