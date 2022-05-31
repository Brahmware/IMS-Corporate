import React, { useEffect, useRef, useState } from 'react'

const ParallaxImageComponent = ({image, alt, filter }) => {

    /* Parallax Background Image*/
    const [, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [parallax, setParallax] = useState({});

    const backgroundImagePartRef = useRef();
    const bgImageDistance = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().top;
    const bgImageHeight = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().height;
    const bgImageWidth = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().width;
    const windowInnerHeight = window.innerHeight;
    const windowInnerWidth = window.innerWidth;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        console.log(bgImageDistance)
        if (bgImageDistance < windowInnerHeight && bgImageDistance > - bgImageHeight) {
            setParallax({
                transform: `translateY(${(windowInnerHeight - bgImageDistance) * 0.2}px)`
            })
        } 

        return () => window.removeEventListener("scroll", handleScroll);
    }, [bgImageDistance, bgImageHeight, windowInnerHeight, windowInnerWidth]);

    return (
        <div className='parallax-image-component'>
            <div className="background-image-part" ref={backgroundImagePartRef}>
                <div className="background-image-holder">
                    <div 
                        className="background-image"
                        style={{
                            height: `${bgImageHeight}px`,
                            width: `${bgImageWidth}px`,
                            filter: `${filter ? "brightness(0.65)" : "none"}`
                        }}
                    >
                        <img
                            src={image} alt={alt ? alt : image}
                            style={parallax}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParallaxImageComponent