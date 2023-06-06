import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
        <>
            <p>Contact</p>
        </>
    )
  }
  
  export default Contact;
