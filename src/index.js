import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname);

// you can also pass this function as callback to map function
// function ncard(val) {
//     console.log(val);

//     return (
//         <Card
//             imgsrc={val.imgsrc}
//             title={val.title}
//             sname={val.sname}
//             link={val.link}
//         />
//     );
// }

ReactDOM.render(
    <>
        <h1 className="heading_style">List Of Top 5 Netflix Series In 2020</h1>

        {Sdata.map((val, idx) => {
            {/* console.log(idx); */ }

            return (
                <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })}

    </>, document.getElementById("root")
);