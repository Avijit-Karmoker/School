import React from "react";
import Slider from "./Slider";
import "./Classes.css";
import '../../../scss/button.scss'

const Classes = () => {
  let url = 'http://google.com/';
  return (
    <div className="classes">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginBottom: "-100px" }}
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L26.7,117.3C53.3,139,107,181,160,176C213.3,171,267,117,320,106.7C373.3,96,427,128,480,133.3C533.3,139,587,117,640,112C693.3,107,747,117,800,112C853.3,107,907,85,960,96C1013.3,107,1067,149,1120,149.3C1173.3,149,1227,107,1280,106.7C1333.3,107,1387,149,1413,170.7L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <h1 className="text-center mb-3" style={{ color: "#423f8d" }}>
          Classes We Offer
        </h1>
        <p className="text-center class-about" style={{ color: "#423f8d" }}>
          Our set he for firmament morning sixth subdue today the drakness
          creeoing gatheres divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue
        </p>
      </div>
      <div>
        <Slider />
      </div>
      <div className="text-center">
        <a href={url}><button className="btn btn-background-slide">More Classes</button></a>
      </div>
    </div>
  );
};

export default Classes;
