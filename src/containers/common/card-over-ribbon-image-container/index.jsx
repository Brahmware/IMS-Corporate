import React, { useEffect, useRef, useState } from 'react'
import HollowButton from '../../../components/buttons/HollowButton'

const CardOverRibbonImageContainer = ({ cardribbondata }) => {

    /* Parallax Background Image*/
    const [, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [parallax, setParallax] = useState({});

    const backgroundImagePartRef = useRef();
    const bgImageDistance = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().top;
    const bgImageHeight = backgroundImagePartRef.current && backgroundImagePartRef.current.getBoundingClientRect().height;
    const windowInnerHeight = window.innerHeight;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (bgImageDistance < windowInnerHeight && bgImageDistance > - bgImageHeight) {
            setParallax({
                transform: `translateY(${(windowInnerHeight - bgImageDistance) * 0.33}px)`
            })
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [bgImageDistance, bgImageHeight, windowInnerHeight]);
    return (
        <div className='section card-over-ribbon-image-container'>
            <div className="background-image-part" ref={backgroundImagePartRef}>
                <div className="background-image-holder">
                    <div className="background-image">
                        <img
                            src={cardribbondata.image} alt={cardribbondata.title}
                            style={parallax}
                        />
                    </div>
                </div>
            </div>
            <div className="card-part">
                <div className="container">
                    <div className="ribbon-card-holder">
                        <div className="ribbon-card">
                            <div
                                className="title"
                                data-aos='fade-right'
                                data-aos-duration='600'
                                data-aos-delay='300'
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: cardribbondata.title
                                    }}
                                />
                            </div>
                            <div
                                className="subtitle"
                                data-aos='fade-right'
                                data-aos-duration='600'
                                data-aos-delay='600'
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: cardribbondata.subtitle
                                    }}
                                />
                            </div>
                            <div
                                className="card-button"
                                data-aos='fade-right'
                                data-aos-duration='600'
                                data-aos-delay='900'
                            >
                                <HollowButton class={"hollow-button white-button"} text={cardribbondata.buttontext} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOverRibbonImageContainer