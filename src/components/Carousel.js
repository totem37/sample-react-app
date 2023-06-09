import { useState } from "react";

import ScreenSize from "../components/ScreenSize";

import "../pages/pages.css";
import "../pages/pages-mobile.css";

function Carousel(props) {
    const mobile = ScreenSize() === 's';

    const images = props.images;
    const numImages = images.length;
    const imagePositions = props.imagePositions;
    const [imageIndex, setImageIndex] = useState(0);
    const styles = {
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%), url("+images[imageIndex % numImages]+")",
        backgroundPosition: imagePositions[imageIndex % numImages],
    }

    function incrementImage () {
        setImageIndex(imageIndex+1);
    }

    function decrementImage () {
        setImageIndex(imageIndex+1);
    }

    return (
        mobile ? (
            <div className="Pagesmobile-homediv1" style={styles} onClick={incrementImage}>
                {props.children}
            </div>
        ) : (
            <div className="Pages-homediv1" style={styles}>
                <img src="Icon_Arrow.svg" alt="Left Arrow" onClick={decrementImage} className="Pages-leftarrow"/>
                {props.children}
                <img src="Icon_Arrow.svg" alt="Right Arrow" onClick={incrementImage} className="Pages-rightarrow"/>
            </div>
        )
    )
}

export default Carousel;