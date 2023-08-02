import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Mayank Singh Chouhan";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://www.thapatechnical.com/";


// .heading {
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px #ffe9c5;
//     margin: 70px 0;
//     font-family: 'Josefin Sans', sans-serif;
// }

const heading = {
    color: "#fa9191",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "70px 0",
    fontFamily: "'Josefin Sans', sans-serif"
};

ReactDOM.render(
    <>
        {
            /* 

            this will throw an following error
            The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
            <h1 style= "color : #fa9191;">My name is {name}</h1>

            the correct way is to pass an object of properties to style attribute
            <h1 style={{ color: "#fa9191", textAlign: "center", textTransform: "capitalize" }}>
               My name is {name}
            </h1> 

            you can also pass an object like this(as the above method is not very efficient and reduces the readability of code)
            <h1 style={heading}>
                My name is {name}
            </h1>
            
            */
        }

        <h1 style={heading}>
            My name is {name}
        </h1>

        <div className="img_div">
            <img src={img1} alt="Random Image" />
            <img src={img2} alt="Random Image" />

            <a href={link} target="_blank">
                <img src={img3} alt="Random Image" />
            </a>
        </div>

    </>, document.getElementById("root")
);