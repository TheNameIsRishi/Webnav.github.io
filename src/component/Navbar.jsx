import React from "react";
import "./Navbar.css"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/*first logo part*/}
        <div className="logo">
          <h2>
            <span>R</span>ishi's
            <span>H</span>ouse
          </h2>
        </div>

        {/*Second menu part */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        {/*3rd social media links*/}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/" target="blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*Hero Setion */}
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Rishi's House</h1>
      </section>
    </>
  );
};

export default Navbar;
