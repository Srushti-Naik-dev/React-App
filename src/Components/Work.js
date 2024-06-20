import React from "react";
import PickMeals from "../Assets/login-image.png";
import ChooseMeals from "../Assets/companion-image.png";
import DeliveryMeals from "../Assets/chat-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Login/SignUp",
      text: "Get started with QuickTalk by creating an account or logging in to your existing one.Our easy and secure signup process ensures you can join the conversation in no time.",
    },
    {
      image: ChooseMeals,
      title: "Choose Campanion",
      text: "Select the perfect chat companion on QuickTalk and start a seamless conversation instantly. Dive into meaningful discussions and stay connected like never before! ",
    },
    {
      image: DeliveryMeals,
      title: "Start A Chat",
      text: "Begin a new conversation on QuickTalk with just a click. Select your contact, type your message, and enjoy real-time communication without any delays.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        QuickTalk is designed to provide you with an effortless and seamless chat experience. Here’s how it works:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
