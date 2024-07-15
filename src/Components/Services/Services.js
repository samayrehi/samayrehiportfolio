import React from "react";
import "./Services.css"
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
          I offer full-stack development services, crafting dynamic web applications using the MERN stack. My expertise includes creating engaging front-end interfaces with React, building robust back-end APIs with Node.js and Express, managing databases with MongoDB, and ensuring responsive, mobile-friendly designs.
          </p>
          <button>Hire Me</button>
        </div>
        {/* Item */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
                <h3>Web Development</h3>
                <p>I specialize in full-stack web development, leveraging the MERN stack to build dynamic, responsive web applications. My services include creating engaging front-end interfaces with React, robust back-end APIs with Node.js and Express, and efficient database management with MongoDB.</p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
                <h3>Desktop Development</h3>
                <p>With a focus on cross-platform solutions, I develop high-performance desktop applications tailored to your needs. Utilizing modern frameworks, I ensure seamless integration, intuitive interfaces, and robust functionality to enhance productivity and user experience on any operating system.</p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
                <h3>UX/UI Design</h3>
                <p>I design visually appealing and user-centric interfaces that enhance the user experience. My approach involves creating intuitive, responsive designs that are not only aesthetically pleasing but also highly functional, ensuring a seamless and engaging experience across all devices and platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
