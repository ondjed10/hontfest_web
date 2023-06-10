import React, { useEffect, useState } from "react";

export const Countdown = () => {


    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24

    const countTimeLeft = (end, now) => {
        let timeLeft = end - now

        let days = Math.floor(timeLeft / day)
        let hours = Math.floor((timeLeft % day) / hour)
        let minutes = Math.floor((timeLeft % hour) / minute)
        let seconds = Math.floor((timeLeft % minute) / second)

        return seconds >= 10 ?`${days} dní, ${hours}:${minutes}:${seconds}` : `${days} dní, ${hours}:${minutes}:0${seconds}`
    }

    let [now, setNow] = useState(new Date())
    const [dayD, setDayD] = useState(new Date(2023, 7, 26, 15, 0, 0))
    const [countdown, setCountDown] = useState(countTimeLeft(dayD, now))

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countTimeLeft(dayD, now))
            let newDate = new Date(now)
            newDate.setSeconds(newDate.getSeconds() + 1)
            setNow(newDate)
        }, 1000) 
        return () => clearInterval(interval)
    }, [now])


    return (
        <div className="countdown">
            <h4>Hontfest začína o:</h4>
            <span>{countdown}</span>
        </div>
    )
}

