// var React = require('react');
import React from 'react';
// var ReactDom = require('react-dom');
import ReactDom from 'react-dom';

// preferred method of wrapping adjacent elements(better than methods explored in previous branch)

// ReactDom.render(
//     <React.Fragment>
//         <h1>Hello World</h1>
//         <h2>Mayank Singh Chouhan</h2>
//         <p>Can render any number of elements this way</p>
//     </React.Fragment>,

//     document.getElementById('root')
// ); 


// syntactic sugar(for react fragment)

ReactDom.render(
    <>
        <h1>Hello World</h1>
        <h2>Mayank Singh Chouhan</h2>
        <p>Can render any number of elements this way</p>
    </>,

    document.getElementById('root')
); 