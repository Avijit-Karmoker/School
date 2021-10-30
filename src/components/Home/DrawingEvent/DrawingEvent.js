import React from "react";
import "./DrawingEvent.css";
import DateTime from "./DateTime";
import CountdownTimer from "./CountdownTimer";

const DrawingEvent = () => {
  return (
    <section>
      <div className="drawing-event">
        <div className="event-details">
          <div className="mid">
            <DateTime />
            <h1 className="event-name">Drawing Event</h1>
            <p className="event-description">
              Our set he for firmament morning sixth subdue today the darkness
              creeping gathered divide our let god moving today moving in
              fourth.
            </p>
            <button className="view-event">View Event</button>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrawingEvent;
