import { useEffect } from "react";

import ContactForm from "../components/ContactForm";
import ScreenSize from "../components/ScreenSize";

import "./pages.css";
import "./pages-mobile.css";

function Contact() {
    const mobile = ScreenSize() === 's';

    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
        <div className="Pages-contactdiv">
            <div className={mobile?"Pagesmobile-contactleftdiv":"Pages-contactleftdiv"}>
                <ContactForm/>
            </div>
            {!mobile && (
                <div className="Pages-rightdiv">
                    <img src={process.env.PUBLIC_URL + "Img_Contact.png"} alt="Logo" className="Pages-contactlogo"/>
                </div>
            )}
        </div>
    )
  }
  
  export default Contact;
