import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [day, setDay] = useState("");

    var timerID;
    useEffect(() => {
        timerID = setInterval(() => {
            let date = new Date();
            let hours = date.getHours();

            let day = "AM";
            if (hours >= 12) {
                hours = 24 - hours;
                day = "PM";
            }
            hours = hours < 10 ? "0" + hours : hours;
            let minutes = date.getMinutes();
            minutes = minutes < 10 ? "0" + minutes : minutes;
            let seconds = date.getSeconds();
            seconds = seconds < 10 ? "0" + seconds : seconds;
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            setDay(day);
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <div className="Clock">
                <h3 id="time">{`${hours} : ${minutes} : ${seconds} ${day}`}</h3>
            </div>
        </div>
    );
};

export default App;
