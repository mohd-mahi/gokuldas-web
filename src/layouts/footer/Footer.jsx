import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer section-padding less">
      <div className="order-ctnr">
        <a
          target="blank"
          href="https://wa.me/919029291221?text=Hello"
          className="whatsapp-icon"
        >
          <img src="/images/whatsapp.png" alt="" />
          <span className="order-now">Order Now!</span>
        </a>
      </div>
      <div className="container">
        <ul className="social-icon-container">
          <li>
            <Link to="https://www.facebook.com/gokuldasgathiawala">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/gokuldasgathiawala/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/gathiawala">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          {/* <li>
            <Link to="?">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li> */}
        </ul>
        <ul className="footer-nav-link d-none">
          <li>
            <Link to="?">MY ACCOUNT</Link>
          </li>
          <li>
            <Link to="?">SUPPORT CENTRE</Link>
          </li>
          <li>
            <Link to="?">TERMS & CONDITIONS</Link>
          </li>
          <li>
            <Link to="?">SHIPPING POLICY</Link>
          </li>
          <li>
            <Link to="?">PRIVACY POLICY</Link>
          </li>
          <li>
            <Link to="?">RETURN & REFUND POLICY</Link>
          </li>
        </ul>
        {/* copyright text  */}
        <div className="copyright">
          <p>
            {" "}
            <span className="cr-code"> &#169;</span> 2025 All Rights Reserved.
            Gokuldas Gathiawala.
            <b>
              HANDCRAFTED BY WAGTAIL
              {/* <span className="highlight-text"> WAGTAIL TECH</span> */}
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
