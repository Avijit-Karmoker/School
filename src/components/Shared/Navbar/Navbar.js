import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../../images/download.webp"

const Navbar = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-light container p-0">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img src={img} alt="Kindergarten" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-center">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Class
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Content
                </Link>
              </li>
              <li class="nav-item pe-0 ps-3">
                <a href="#" alt=""><button  className="enroll">Enroll Now</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
