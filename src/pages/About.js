import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "About Us";
    }, []);

    return (
        <>
            <p>About</p>
        </>
    )
  }
  
  export default About;
  