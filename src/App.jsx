import React, { createContext } from 'react';
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

console.log(FirstName);

const App = () => {
    return (
        <>
            <FirstName.Provider value={"Mayank"}>
                <LastName.Provider value={"Couhan"}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default App;
export { FirstName, LastName };