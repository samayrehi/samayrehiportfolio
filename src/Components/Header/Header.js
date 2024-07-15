import React from "react";
import Typical from "react-typical";
import "./Header.css";
import Me from "../../assets/me.png";
import hdfcbank from "../../assets/HDFC-Bank.png";
import gpay from "../../assets/google-pay.png";
const Header = () => {
  return (
    <div className="header-container">
      {/* Header Content */}
      <div className="header-content">
        <h1>Hi! I Am</h1>
        <h2 className="fullname">Samay Rehi</h2>
        <h2>
          I Am A {""}
          <Typical
            steps={[
              "Full Stack Developer 💻",
              2000,
              "Front-End Developer 🧑‍💻",
              2000,
              "Back-End Developer 📡",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I am a Passionate MERN Stack Developer skilled in building dynamic, responsive web applications with MongoDB, Express.js, React, and Node.js. Dedicated to delivering efficient, scalable solutions.
        </p>
        {/* Payment Links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <img src={gpay} alt="gpay" className="google-pay" />
          <img src={hdfcbank} alt="hdfc" className="hdfc-bank" />
        </div>
      </div>

      {/* Image Container */}
      <div className="profile-img-container">
        <img src={Me} alt="me" />
      </div>
    </div>
  );
};

export default Header;
