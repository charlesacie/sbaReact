import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="profile-photo">
        <img src="path-to-your-photo.jpg" alt="Profile" />
      </div>
      <div className="contact-info">
        <h1>Charles L. Young</h1>
        <p>(412) 855-1253 | charlesacieia@gmail.com</p>
        <p><a href="https://github.com/charlesacie">GitHub</a> | <a href="https://linkedin.com/in/charlesacieyoung">LinkedIn</a></p>
      </div>
    </div>
  );
}

export default Header;
