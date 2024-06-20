import React from "react";
import AboutBackground from "../Assets/ab-background.jpeg";
import AboutBackgroundImage from "../Assets/ab-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        QuickTalk is a cutting-edge real-time chat application.
        </h1>
        <p className="primary-text">
        Our mission is to provide a seamless platform where users can connect instantly and effortlessly with friends, family, and colleagues.
        </p>
        <p className="primary-text">
        Join QuickTalk today and discover a new way to connect and communicate in real time.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
