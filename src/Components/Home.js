import React from "react";
import BannerBackground from "../Assets/hm-background.png";
import BannerImage from "../Assets/home-banner.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Welcome to QuickTalk: Your Personal Real-Time Chat Experience 
          </h1>
          <p className="primary-text">
          Stay connected with QuickTalk, the ultimate real-time chat application 
          designed for seamless, instant communication.
          </p>
          <button className="secondary-button">
            Chat Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
