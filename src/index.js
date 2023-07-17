// var React = require('react');
import React from 'react';
// var ReactDom = require('react-dom');
import ReactDom from 'react-dom';

// this will show error (Adjacent JSX elements must be wrapped in an enclosing tag)

// ReactDom.render(
//     <h1>Hello World</h1>
//     <p>Mayank Singh Chouhan</p>,

//     document.getElementById('root')
// ); 



// we can wrape adjacent JSX element in a div to solve this problem

// ReactDom.render(
//     <div>
//         <h1>Hello World</h1>
//         <h2>Mayank Singh Chouhan</h2>
//         <p>Can render any number of elements this way</p>
//     </div>,

//     document.getElementById('root')
// ); 



// In react v16 and above it is possible 
// for render to return an array of elements
// const names = ["Mayank", "Singh", "Chouhan"]

ReactDom.render(
    [
        <h1>Hello World</h1>,
        <h2>Mayank Singh Chouhan</h2>,
        <p>Can render any number of elements this way</p>
    ],

    document.getElementById('root')
); 