import React from 'react';

import ScreenSize from "../components/ScreenSize";

import "./layout.css";
import "./layout-mobile.css";
  

function Footer() {
  const mobile = ScreenSize() === 's';

  return (
    <div className={mobile?"Footermobile-container":"Footer-container"}>
        <p className={mobile?"":"Footer-text"}>Website development by <u>AVAMAE</u></p>
    </div>
  );
};
  
export default Footer;