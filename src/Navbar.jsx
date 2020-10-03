import React from "react";

function Navbar(){
return (
  <div className ="navbar">
    <ul className="navbar-list">
      <li className="navbar-list-item"><a href ="#profile">Home</a></li>
      <li className="navbar-list-item"><a href ="#experience">Experience</a></li>
      <li className="navbar-list-item"><a href ="#projects">Project</a></li>
      <li className="navbar-list-item"><a href ="#skills">Skills</a></li>
      <li className="navbar-list-item"><a href ="#contact">Contact</a></li>
    </ul>
  </div>
);
}

export default Navbar;
