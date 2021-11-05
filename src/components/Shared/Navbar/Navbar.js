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
              <li class="nav-item line">
                <Link class="nav-link active home" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item line">
                <Link class="nav-link class" href="#">
                  Class
                </Link>
              </li>
              <li class="nav-item line">
                <Link class="nav-link about" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item line">
                <Link class="nav-link blog" href="#">
                  Blog
                </Link>
              </li>
              <li class="nav-item line">
                <Link class="nav-link content" href="#">
                  Content
                </Link>
              </li>
              <li class="nav-item pe-0 ps-3">
                <Link href="#" alt=""><button  className="enroll">Enroll Now</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
