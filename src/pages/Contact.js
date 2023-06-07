import { useEffect } from "react";

import ContactForm from "../components/ContactForm";

import "./pages.css";

function Contact() {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
        <div className="Pages-contactdiv">
            <div className="Pages-contactleftdiv">
                <ContactForm/>
            </div>
            <div className="Pages-rightdiv">
                <img src={process.env.PUBLIC_URL + "Img_Contact.png"} alt="Logo" className="Pages-contactlogo"/>
            </div>
        </div>
    )
  }
  
  export default Contact;
