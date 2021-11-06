import React, { Component } from "react";
import Slider from "react-slick";
import kids1 from "../../../images/kids-1.jpg";
import kids2 from "../../../images/kids-2.jpg";
import kids3 from "../../../images/kids-3.jpg";
import kids4 from "../../../images/kids-4.jpg";
import kids5 from "../../../images/kids-5.jpg";
import kids6 from "../../../images/kids-6.jpg";
import "./Picture.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default class Picture extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 300,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
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
      <div className="picture-slider">
        <Slider {...settings}>
          <div className="overlay">
            <img src={kids1} alt="" />
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="overlay">
            <img src={kids2} alt="" />
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="overlay">
            <img src={kids3} alt="" />
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="overlay">
            <img src={kids4} alt="" />
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="overlay">
            <img src={kids5} alt="" />
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="overlay">
            <img src={kids6} alt="" />
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
