//Slick slider
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeacherSlide.css";
import image1 from "../../../images/Teacher-1.jpg";
import image2 from "../../../images/teacher-2.jpg";
import image3 from "../../../images/teacher-3.jpg";
import image4 from "../../../images/teacher-4.jpg";
import image5 from "../../../images/teacher-5.jpg";
import image6 from "../../../images/teacher-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
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
      <div className="container slider" style={{ marginTop: "70px" }}>
        <Slider {...settings}>
          <div>
            <div className="me-3 ms-3 mb-5 bg-body slide teacher">
              <div className="overlay">
                <img src={image1} alt="Laura Bush" />
                <div className="icon">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>Laura Bush</h5>
              <p>Chemistry Teacher</p>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 mb-5 bg-body slide teacher">
              <div className="img">
                <div className="overlay">
                  <img src={image2} alt="Laura Bush" />
                  <div className="icon">
                    <ul>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h5>Erin Gruwell</h5>
              <p>Economics Teacher</p>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 mb-5 bg-body slide teacher">
              <div className="overlay">
                <img src={image3} alt="Laura Bush" />
                <div className="icon">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>Deanna Wright</h5>
              <p>Accounting Teacher</p>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 mb-5 bg-body slide teacher">
              <div className="overlay">
                <img src={image4} alt="Laura Bush" />
                <div className="icon">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>Maxine Waters</h5>
              <p>English Teacher</p>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 mb-5 bg-body slide teacher">
              <div className="overlay">
                <img src={image5} alt="Laura Bush" />
                <div className="icon">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>Roberta Bondar Bush</h5>
              <p>Math Teacher</p>
            </div>
          </div>
          <div>
            <div className="me-3 ms-3 mb-5 bg-body slide teacher">
              <div className="overlay">
                <img src={image6} alt="Laura Bush" />
                <div className="icon">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>J.K. Rowling</h5>
              <p>Physics Teacher</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
