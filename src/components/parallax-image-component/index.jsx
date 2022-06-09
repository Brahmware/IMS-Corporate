import React, { useEffect, useRef, useState } from 'react'

const ParallaxImageComponent = ({image, alt, filter, positiontop}) => {

    /* Parallax Background Image*/
    // console.log(filter)
    const [, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [parallax, setParallax] = useState({});

    const backgroundImagePartRef = useRef();
    const bgImageDistance = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().top;
    const bgImageHeight = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().height;
    const bgImageWidth = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().width;
    const windowInnerHeight = window.innerHeight;
    const windowInnerWidth = window.innerWidth;

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
                    transform: `translateY(${(windowInnerHeight - bgImageDistance) * parallax_factor}px)`
                })
            }
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [bgImageDistance, bgImageHeight, positiontop, windowInnerHeight, windowInnerWidth]);

    return (
        <div className='parallax-image-component w-100'>
            <div className="background-image-part w-100" ref={backgroundImagePartRef}>
                <div className="background-image-holder w-100">
                    <div 
                        className="background-image w-100"
                        style={{
                            height: `${bgImageHeight}px`,
                            width: `${bgImageWidth}px`,
                            filter: `${filter ? "brightness(0.65)" : "none"}`
                        }}
                    >
                        <img
                            src={image} alt={alt ? alt : image}
                            style={parallax}
                            className="w-100 home-image-bg h-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParallaxImageComponent