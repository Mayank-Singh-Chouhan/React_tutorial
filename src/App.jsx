import React, { useState } from "react";

// controlled component
const App = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");

    const handleChange = (e) => {
        // console.log(e.target.name);
        if (e.target.name === "firstName") {
            const capName = (e.target.value).toUpperCase();
            setName(capName);
        } else {
            setPswd(e.target.value);
        }
    }

    // const handlePassword = (e) => {
    //     console.log(e.target.value);
    //     setPswd(e.target.value);
    // }

    return (
        <>
            <form>
                <label> First Name :</label>
                <br />
                <input type="text" name="firstName" value={name} onChange={handleChange} />
                <br />
                <label> Password :</label>
                <br />
                {/* <input type="text" value={pswd} onChange={handlePassword} /> */}
                <input type="text" name="password" value={pswd} onChange={handleChange} />
                <br />
            </form>

        </>
    );

}

export default App;