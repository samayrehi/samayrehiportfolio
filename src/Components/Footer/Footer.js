/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2024 Samay Rehi. All Right Reserved.</p>
      </div>
      {/* Social Media Icons */}
      <ul className="footer-social-media">
        <li>
          <a
            href="https://x.com/notanastrologer/"
            className="fa-brands fa-x-twitter"
          ></a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/isamayrehi/"
            className="fa-brands fa-instagram"
          ></a>
        </li>
        <li>
          <a
            href="https://discord.gg/4ak4RfhA"
            className="fa-brands fa-discord"
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/samay-rehi-093764210/"
            className="fa-brands fa-linkedin"
          ></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
