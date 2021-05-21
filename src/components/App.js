import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [day, setDay] = useState("");
    const [timerID, settimerID] = useState(null);

    useEffect(() => {
        settimerID(
            setInterval(() => {
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                let day = hours >= 12 ? "PM" : "AM";
                if (hours > 12) {
                    hours = 12 - (24 - hours);
                }
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                // console.log(typeof hours, typeof minutes, typeof seconds);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
                setDay(day);
            }, 1000)
        );
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div className="Clock">
            <h3 id="time">{`${hours}:${minutes}:${seconds} ${day}`}</h3>
        </div>
    );
};

export default App;
