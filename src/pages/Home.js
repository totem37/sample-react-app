import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./pages.css";

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <>
            <div className="Pages-homediv1">
                <div className="Pages-leftdiv">
                    <h1 className="Pages-h1">Lorem ipsum dolor</h1>
                    <h3 className="Pages-h3">Lorem ipsum</h3>
                    <br/>
                    <NavLink to="/contact-us" className="Pages-contactbutton">Contact us</NavLink>
                </div>
            </div>

            <div className="Pages-homediv2">
                <div className="Pages-leftdiv">
                    <h2 className="Pages-h2">Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et ultrices neque ornare aenean euismod elementum nisi. Urna molestie at elementum eu facilisis sed odio morbi quis.</p>
                    <ul className="Pages-ul">
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                    </ul>
                    <br/>
                    <NavLink className="Pages-contactbutton">Learn more</NavLink>
                </div>
                <div className="Pages-rightdiv">
                    <img src={process.env.PUBLIC_URL + "shutterstock_696636415.jpg"} alt="Office" className="Pages-homeofficepicture"/>
                </div>
            </div>

            <div className="Pages-homediv3">
                <div className="Pages-homeleftbox">
                    <h2 className="Pages-boxh2">Lorem ipsum dolor</h2>
                    <p className="Pages-boxtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et ultrices neque ornare aenean euismod elementum nisi. Urna molestie at elementum eu facilisis sed odio morbi quis.
                        Sed risus ultricies tristique nulla aliquet enim tortor.</p>
                    <br/>
                    <NavLink className="Pages-loginbutton">Log in</NavLink>
                </div>
            </div>

            <div className="Pages-homediv4">
                <h2 className="Pages-h2">Lorem ipsum dolor</h2>
                <h4 className="Pages-h4">Lorem ipsum</h4>
                <div className="Pages-homesplittext">
                    <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et ultrices neque ornare aenean euismod elementum nisi. Urna molestie at elementum eu facilisis sed odio morbi quis.
                        Sed risus ultricies tristique nulla aliquet enim tortor. Libero nunc consequat interdum varius sit amet mattis vulputate.
                        Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Cras fermentum odio eu feugiat pretium.</b>
                        <br/><br/>
                        
                        Sed blandit libero volutpat sed cras ornare arcu dui. Volutpat odio facilisis mauris sit amet. Donec ac odio tempor orci. Sed egestas egestas fringilla
                        phasellus faucibus scelerisque eleifend. Purus in massa tempor nec feugiat nisl pretium fusce. Ornare arcu odio ut sem nulla
                        pharetra diam sit amet. Sit amet commodo nulla facilisi nullam vehicula ipsum.
                        <br/><br/>

                        Arcu cursus vitae congue mauris rhoncus. Venenatis cras sed felis eget velit. Sodales ut eu sem integer vitae justo eget magna.
                        Nisi scelerisque eu ultrices vitae. Sagittis vitae et leo duis. Purus ut faucibus pulvinar elementum. Pulvinar neque laoreet
                        suspendisse interdum consectetur libero id faucibus nisl. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
                        Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
                        <br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et ultrices neque ornare aenean euismod elementum nisi. Urna molestie at elementum eu facilisis sed odio morbi quis.
                        Sed risus ultricies tristique nulla aliquet enim tortor. Libero nunc consequat interdum varius sit amet mattis vulputate.
                        Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Cras fermentum odio eu feugiat pretium. Sed blandit libero volutpat
                        sed cras ornare arcu dui. Volutpat odio facilisis mauris sit amet. Donec ac odio tempor orci. Sed egestas egestas fringilla
                        phasellus faucibus scelerisque eleifend. Purus in massa tempor nec feugiat nisl pretium fusce. Ornare arcu odio ut sem nulla
                        pharetra diam sit amet. Sit amet commodo nulla facilisi nullam vehicula ipsum. Nisl purus in mollis nunc sed id semper risus. Porttitor massa id
                        neque aliquam vestibulum.
                        </p>
                    </div>
                </div>

            <div className="Pages-homediv5">
                <NavLink to="/contact-us" className="Pages-contactbutton">Contact us</NavLink>
            </div>
        </>
    )
  }
  
  export default Home;
  