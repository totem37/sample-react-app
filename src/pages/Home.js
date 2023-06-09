import { useEffect } from "react";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";

import Carousel from "../components/Carousel";
import ScreenSize from "../components/ScreenSize";

import "./pages.css";
import "./pages-mobile.css";

const BASE_URL = 'https://interview-assessment.api.avamae.co.uk'

function Home() {
    const mobile = ScreenSize() === 's';

    const [isLoaded, setIsLoaded] = useState(false);
    const [mainImages, setMainImages] = useState([]);

    useEffect(() => {
        document.title = "Home";
        axios.get(BASE_URL + '/api/v1/home/banner-details').then((response) => {
            if (response.status === 200) {
                response.data.Details.forEach(function(i) {setMainImages(m => m.concat(i.ImageUrl))});
            } else {
                setMainImages(['url(shutterstock_407632243.jpg)', 'url(shutterstock_696636346.jpg)']);
            };
            setIsLoaded(true);
        }).catch((error) => {
            setMainImages(['url(shutterstock_407632243.jpg)', 'url(shutterstock_696636346.jpg)']);
            setIsLoaded(true);
        });
    }, []);
    
    let mainImagePositions = ['60% 25%', '50% 50%', '50% 10%'];
    mainImagePositions = mainImagePositions.concat(mainImagePositions); // React strict mode causes the API to be queried twice

    return (
        <>
            {isLoaded ? (
                    <Carousel images={mainImages} imagePositions={mainImagePositions}>
                        <div className={mobile?"":"Pages-homeleftdiv1"}>
                            <h1 className={mobile?"Pagesmobile-h1":"Pages-h1"}>Lorem ipsum dolor</h1>
                            <h3 className={mobile?"Pagesmobile-h3":"Pages-h3"}>Lorem ipsum</h3>
                            <br/>
                            <NavLink to="/contact-us" className={mobile?"Pagesmobile-contactbutton":"Pages-contactbutton"}>Contact us</NavLink>
                        </div>
                    </Carousel>
            ) : (
                <div className={mobile?"Pagesmobile-homediv1":"Pages-homediv1"}>
                    <p className="Pages-loadingtext">Loading...</p>
                </div>
            )}

            {mobile && (
                <div className="Pagesmobile-centerdiv">
                    <img src={process.env.PUBLIC_URL + "shutterstock_696636415.jpg"} alt="Office" className="Pagesmobile-homeofficepicture"/>
                </div>
            )}
            <div className={mobile?"":"Pages-homediv2"}>
                <div className={mobile?"Pagesmobile-homediv2":"Pages-homeleftdiv2"}>
                    <h2 className={mobile?"Pagesmobile-h2":"Pages-h2"}>Lorem ipsum dolor</h2>
                    <p className={mobile?"Pagesmobile-text":""}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et ultrices neque ornare aenean euismod elementum nisi. Urna molestie at elementum eu facilisis sed odio morbi quis.</p>
                    <ul className={mobile?"Pagesmobile-ul":"Pages-ul"}>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                        <li>Fourth item</li>
                    </ul>
                    <br/>
                    {mobile?(
                        <div className="Pagesmobile-centerdiv">
                            <NavLink to="/about-us" className="Pagesmobile-contactbutton">Learn more</NavLink>
                        </div>
                    ) : (
                        <NavLink to="/about-us" className="Pages-contactbutton">Learn more</NavLink>
                    )}
                </div>
                {!mobile && (<div className="Pages-rightdiv">
                    <img src={process.env.PUBLIC_URL + "shutterstock_696636415.jpg"} alt="Office" className="Pages-homeofficepicture"/>
                </div>)}
            </div>
            <br/>

            <div className={mobile?"Pagesmobile-homediv3":"Pages-homediv3"}>
                <div className={mobile?"Pagesmobile-homebox":"Pages-homeleftbox"}>
                    <h2 className={mobile?"Pagesmobile-boxh2":"Pages-boxh2"}>Lorem ipsum dolor</h2>
                    <p className={mobile?"Pagesmobile-boxtext":"Pages-boxtext"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Et ultrices neque ornare aenean euismod elementum nisi. Urna molestie at elementum eu facilisis sed odio morbi quis.
                        Sed risus ultricies tristique nulla aliquet enim tortor.</p>
                    <br/>
                    <NavLink className={mobile?"Pagesmobile-loginbutton":"Pages-loginbutton"}>Log in</NavLink>
                </div>
            </div>

            <div className={mobile?"Pagesmobile-centerdiv":"Pages-homediv4"}>
                <h2 className={mobile?"Pagesmobile-h2":"Pages-h2"}>Lorem ipsum dolor</h2>
                <h4 className={mobile?"Pagesmobile-h4":"Pages-h4"}>Lorem ipsum</h4>
                <div className={mobile?"Pagesmobile-text":"Pages-homesplittext"}>
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
                <NavLink to="/contact-us" className={mobile?"Pagesmobile-contactbutton":"Pages-contactbutton"}>Contact us</NavLink>
            </div>
    </>
    )
  }
  
  export default Home;
  