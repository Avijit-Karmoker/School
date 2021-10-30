//Slick slider
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container slider">
        <Slider {...settings}>
          <div>
            <div className="me-3 ms-3 shadow mb-5 bg-body slide">
              <div className="slide-top1">
                <button className="admission-button">Admission Closed</button>
              </div>
              <div>
                <h2 className="slide-title">Intelligent Challenge</h2>
                <p className="slide-details">
                  The words you use in your written communics speak volumes.
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between div-footer">
                <div>
                  <p>3-5</p>
                  <p>Age Group</p>
                </div>
                <div>
                  <p>30</p>
                  <p>Classes</p>
                </div>
                <div>
                  <p>10/h</p>
                  <p>Class Price</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 shadow mb-5 bg-body slide">
              <div className="slide-top2">
                <button className="admission-button">Admission Closed</button>
              </div>
              <div>
                <h2 className="slide-title">Intelligent Challenge</h2>
                <p className="slide-details">
                  The words you use in your written communics speak volumes.
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between div-footer">
                <div>
                  <p>3-5</p>
                  <p>Age Group</p>
                </div>
                <div>
                  <p>30</p>
                  <p>Classes</p>
                </div>
                <div>
                  <p>10/h</p>
                  <p>Class Price</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 shadow mb-5 bg-body slide">
              <div className="slide-top3">
                <button className="admission-button">Admission Closed</button>
              </div>
              <div>
                <h2 className="slide-title">Intelligent Challenge</h2>
                <p className="slide-details">
                  The words you use in your written communics speak volumes.
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between div-footer">
                <div>
                  <p>3-5</p>
                  <p>Age Group</p>
                </div>
                <div>
                  <p>30</p>
                  <p>Classes</p>
                </div>
                <div>
                  <p>10/h</p>
                  <p>Class Price</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 shadow mb-5 bg-body slide">
              <div className="slide-top4">

              </div>
              <div>
                <h2 className="slide-title">Intelligent Challenge</h2>
                <p className="slide-details">
                  The words you use in your written communics speak volumes.
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between div-footer">
                <div>
                  <p>3-5</p>
                  <p>Age Group</p>
                </div>
                <div>
                  <p>30</p>
                  <p>Classes</p>
                </div>
                <div>
                  <p>10/h</p>
                  <p>Class Price</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
