import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => {
    return (
        <>
            <h1 className="heading_style">List Of Top 5 Netflix Series In 2020</h1>

            {Sdata.map((val) => {

                return (
                    <Card
                        key={val.id} // to solve this error => Warning: Each child in a list should have a unique "key" prop.
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })}
        </>
    );
}

export default App;