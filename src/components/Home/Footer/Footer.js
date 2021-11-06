import React from "react";
import footerStyles from "./Footer.module.css";
import img from "../../../images/download.webp";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section>
      <div className={footerStyles.footerMain}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8">
              <img src={img} alt="" />
              <p className={footerStyles.footerText}>
                Users and submit their own items. You can create different
                packages and by connecting with your PayPal or Stripe account
                charge users for registration.
              </p>
              <div className={footerStyles.icons}>
                <Link href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
                <Link href="#" className={footerStyles.lastIcon}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4">
              <div className={footerStyles.quickLinks}>
                <h5>Quick Links</h5>
                <p>
                  <Link href="#">Classes</Link>
                </p>
                <p>
                  <Link href="#">Join with us</Link>
                </p>
                <p>
                  <Link href="#">About</Link>
                </p>
                <p>
                  <Link href="#">Blog</Link>
                </p>
                <p>
                  <Link href="#">Events</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6">
              <div className={footerStyles.aboutUs}>
                <h5>About Us</h5>
                <p>
                  <Link href="#">Our Team</Link>
                </p>
                <p>
                  <Link href="#">Private Policy</Link>
                </p>
                <p>
                  <Link href="#">Testimonial</Link>
                </p>
                <p>
                  <Link href="#">Programming</Link>
                </p>
                <p>
                  <Link href="#">User Stories</Link>
                </p>
              </div>
            </div>
          </div>
          <p className={footerStyles.copyright}>
            Copyright &copy;2021 All rights reserved | This template is made
            with 💚 by Ovijit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
