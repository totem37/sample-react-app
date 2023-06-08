import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import ScreenSize from "../components/ScreenSize";

import "./layout.css";
import "./layout-mobile.css";
  
function Navbar() {
    const mobile = ScreenSize() === 's';

    let navigate = useNavigate(); 
    function goHome() { 
        let path = '/'; 
        navigate(path);
    }

    return (
        <div className={mobile?"Navbarmobile-container":"Navbar-container"} onClick={mobile?goHome:function(){}}>
            <img src={process.env.PUBLIC_URL + "Logo.svg"} alt="Company Logo" className={mobile?"Navbarmobile-companylogo":"Navbar-companylogo"}/>
                {!mobile && <ul className="Navbar-right">
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
            </ul>}
        </div>
    );
};
  
export default Navbar;