import React, { useEffect, useRef, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const setTimer = () => {
    const countDownDate = new Date("Nov 27, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer">
      <div className="days">
        <p className="mb-0">{timerDays}</p>
        <p>Days</p>
      </div>
      <div className="hours">
        <p className="mb-0">{timerHours}</p>
        <p>Hours</p>
      </div>
      <div className="minutes">
        <p className="mb-0">{timerMinutes}</p>
        <p>Minutes</p>
      </div>
      <div className="seconds">
        <p className="mb-0">{timerSeconds}</p>
        <p>Seconds</p>
      </div>
    </section>
  );
};

export default CountdownTimer;
