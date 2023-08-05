import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

let favSeries = "amazon";

const FavS = () => {
    if (favSeries === "netflix") {
        return <Netflix />;
    } else {
        return <Amazon />;
    }
}

const App = () => {
    return (
        <>
            <h1 className="heading_style">List Of Top 5 Netflix Series In 2020</h1>
            <FavS />
        </>
    );
}

export default App;