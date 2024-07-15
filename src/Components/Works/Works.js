import React from "react";
import "./Works.css";
import wOne from "../../assets/w1.png";
import wTwo from "../../assets/w2.png";
import wThree from "../../assets/w3.png";
import wFour from "../../assets/w4.png";
import wFive from "../../assets/w5.png";
import wSix from "../../assets/w6.png";

const Works = () => {
  return (
    <div className="work-container">
      <h1>My Recent Works</h1>
      <div className="work-list-container">
        <div className="work-item">
          <img src={wOne} alt="wone"></img>
        </div>
        <div className="work-item">
          <img src={wTwo} alt="wTwo"></img>
        </div>
        <div className="work-item">
          <img src={wThree} alt="wThree"></img>
        </div>
        <div className="work-item">
          <img src={wFour} alt="wFour"></img>
        </div>
        <div className="work-item">
          <img src={wFive} alt="wFive"></img>
        </div>
        <div className="work-item">
          <img src={wSix} alt="wSix"></img>
        </div>
      </div>
    </div>
  );
};

export default Works;
