import {NavLink} from "react-router-dom";

import "./pages.css";

function NoPage() {
    return (
        <>
            <h1 className="Pages-nopagetext">Error 404 - Page Not Found</h1>
            <NavLink to='/' className="Pages-nopagehomelink">
                Return to Homepage
            </NavLink>
        </>
    )
  }
  
  export default NoPage;
  