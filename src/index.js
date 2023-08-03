import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";

ReactDOM.render(
    <>
        <Card
            imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
            title="A Netflix Original Series"
            sname="DARK"
            link="https://www.netflix.com/in/title/80100172"
        />
        <Card
            imgsrc="https://i.pinimg.com/originals/9f/45/88/9f4588f879aa9781cbb77e93c6cef20a.jpg"
            title="A Netflix Original Series"
            sname="Extracurricular"
            link="https://www.netflix.com/in/title/80990668"
        />
        <Card
            imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
            title="A Netflix Original Series"
            sname="Stranger Things"
            link="https://www.netflix.com/in/title/80057281"
        />

    </>, document.getElementById("root")
);