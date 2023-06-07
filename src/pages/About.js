import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "About Us";
    }, []);

    return (
        <div className="Pages-aboutdiv">
            <h2 className="Pages-h2">About us</h2>

            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b><br/>
                Sed blandit libero volutpat sed cras ornare arcu dui. Volutpat odio facilisis mauris sit amet. Donec ac odio tempor orci. Sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend. Purus in massa tempor nec feugiat nisl pretium fusce. Ornare arcu odio ut sem nulla
                pharetra diam <a href="contact-us">sit amet</a>. Sit amet commodo nulla facilisi nullam vehicula ipsum.
                <br/><br/>

                Arcu cursus vitae congue mauris rhoncus. Venenatis cras sed felis eget velit. Sodales ut eu sem integer vitae justo eget magna.
                Nisi scelerisque eu ultrices vitae. Sagittis vitae et leo duis. Purus ut faucibus pulvinar elementum. Pulvinar neque laoreet
                suspendisse interdum consectetur libero id faucibus nisl. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
                Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
                <br/><br/></p>

            <div className="Pages-aboutcenterdiv">
                <img src={process.env.PUBLIC_URL + "shutterstock_696636415.jpg"} alt="Office" className="Pages-aboutofficepicture"/>
            </div>

            <p>Sed blandit libero volutpat sed cras ornare arcu dui. Volutpat odio facilisis mauris sit amet. Donec ac odio tempor orci. Sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend. Purus in massa tempor nec feugiat nisl pretium fusce. Ornare arcu odio ut sem nulla
                pharetra diam sit amet. Sit amet commodo nulla facilisi nullam vehicula ipsum. Ornare arcu odio ut sem nulla
                pharetra diam sit amet. Sit amet commodo nulla facilisi nullam vehicula ipsum. Donec ac odio tempor orci. Sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend.</p>
            
            <h5 className="Pages-h5">Arcu cursus vitae congue mauris rhoncus:</h5>

            <ul className="Pages-ul">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
                <li>Fourth item</li>
            </ul>

            <p>Sed blandit libero volutpat sed cras ornare arcu dui. Volutpat odio facilisis mauris sit amet. Donec ac odio tempor orci. Sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend. Purus in massa tempor nec feugiat nisl pretium fusce. Sit amet commodo nulla facilisi nullam vehicula ipsum.
                <br/><br/>

                Arcu cursus vitae congue mauris rhoncus. Venenatis cras sed felis eget velit. Sodales ut eu sem integer vitae justo eget magna.
                Nisi scelerisque eu ultrices vitae. Sagittis vitae et leo duis. Purus ut faucibus pulvinar elementum. Pulvinar neque laoreet
                suspendisse interdum consectetur libero id faucibus nisl. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
                Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
                Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
                <br/><br/></p>
        </div>
    )
  }
  
  export default About;
  