import React from "react";
import './DrawingEvent.css'

const DateTime = () => {
  const showDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[showDate.getMonth()];
  const displayTodaysDate =
    showDate.getDate() + " " + monthName + " " + showDate.getFullYear();
  return (
    <div>
      <h5 className="date">{displayTodaysDate}</h5>
    </div>
  );
};

export default DateTime;
