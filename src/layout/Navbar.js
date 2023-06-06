import React from 'react';
import {NavLink} from "react-router-dom";

import "./layout.css";
  
function Navbar() {
  return (
    <div className="Navbar-container">
        <img src={process.env.PUBLIC_URL + "Logo.svg"} alt="Company Logo" className="Navbar-companylogo"/>
        <ul className="Navbar-right">
            <NavLink to='/' className="Navbar-link">
                HOME
            </NavLink>
            <NavLink to='/about-us' className="Navbar-link">
                ABOUT US
            </NavLink>
            <NavLink to='/contact-us' className="Navbar-link">
                CONTACT US
            </NavLink>
            <NavLink className="Navbar-login">
                Log In
            </NavLink>
        </ul>
    </div>
  );
};
  
export default Navbar;