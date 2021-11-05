import React from "react";
import "./Quotes.css";
import quote from "../../../images/quote.png";
import himel from "../../../images/Himel.jpg";
import ovijit from "../../../images/Ovijit.jpg";
import arup from "../../../images/Arup.jpg";

const Quotes = () => {
  return (
    <section>
      <div className="quotes">
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
        <div
          id="carouselExampleControls"
          class="carousel slide container"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner quote">
            <div class="carousel-item active">
              <img src={quote} alt="Quote" />
              <p className="quote-text">
                "Supercharge your WordPress hosting with detailed website
                analytics, marketing tools. Our experts are just part of the
                reason Bluehost is the ideal home for your WordPress website.
                We're here to help you succeed!
              </p>
              <div className="person d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={himel} alt="Person" />
                <div className="person-info">
                  <p className="person-name">Himel Srizon</p>
                  <p className="person-role">Software Developer</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={quote} alt="Quote" />
              <p className="quote-text">
                "Supercharge your WordPress hosting with detailed website
                analytics, marketing tools. Our experts are just part of the
                reason Bluehost is the ideal home for your WordPress website.
                We're here to help you succeed!
              </p>
              <div className="person d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={ovijit} alt="Person" />
                <div className="person-info">
                  <p className="person-name">Ovijit Karmoker</p>
                  <p className="person-role">Web Developer</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={quote} alt="Quote" />
              <p className="quote-text">
                "Supercharge your WordPress hosting with detailed website
                analytics, marketing tools. Our experts are just part of the
                reason Bluehost is the ideal home for your WordPress website.
                We're here to help you succeed!
              </p>
              <div className="person d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={arup} alt="Person" />
                <div className="person-info">
                  <p className="person-name">Arup Ratan Karmoker</p>
                  <p className="person-role">Advocate</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon previous"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon next"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
