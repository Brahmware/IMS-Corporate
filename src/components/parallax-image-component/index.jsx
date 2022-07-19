import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../utils/getWindowDimensions';

const ParallaxImageComponent = ({ image, alt, filter, positiontop }) => {

    const [imageDimensions, setImageDimensions] = useState({});
    /* Parallax Background Image*/
    const [, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [parallax, setParallax] = useState({});

    const backgroundImagePartRef = useRef();
    const bgImageDistance = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().top;
    const bgImageHeight = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().height;
    const bgImageWidth = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().width;
    const { height, width } = useWindowDimensions();
    
    let windowInnerHeight = height,
        windowInnerWidth = width

    const parallax_factor = 0.2;


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (positiontop) {
            setParallax({
                transform: `translateY(${window.pageYOffset * parallax_factor}px)`
            })
        } else {
            if (bgImageDistance <= windowInnerHeight && bgImageDistance >= - bgImageHeight) {
                setParallax({
                    height: `${bgImageHeight + bgImageHeight * parallax_factor}px`,
                    width: `${bgImageWidth}px`,
                    filter: `${filter ? "brightness(0.65)" : "none"}`,
                    transform: `translateY(${(windowInnerHeight - bgImageDistance - bgImageHeight) * parallax_factor}px)`
                })
            }
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [bgImageDistance, bgImageHeight, bgImageWidth, filter, positiontop, windowInnerHeight, windowInnerWidth]);

    return (
        <div className='parallax-image-component' ref={backgroundImagePartRef}>
            <div
                className="background-image"
                style={parallax}
            >
                <img
                    src={image} alt={alt ? alt : image}
                    style={{
                        height: `${( 1 + parallax_factor) * bgImageHeight}px`,
                        width: `${bgImageWidth}px`
                    }}
                    // style={{
                    //     height: `${( 1 + parallax) * bgImageHeight}px`,
                    //     width: `${bgImageWidth}px`
                    // }}
                    className="image-bg"
                />
            </div>
        </div>
    )
}

export default ParallaxImageComponent