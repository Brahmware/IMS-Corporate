import React, { useEffect, useRef, useState } from 'react'
import FilledButton from '../buttons/FilledButton';

const MenuCardContent = ({ card }) => {
    const image = card.image;
    const cardtitle = card.cardtitle;
    const cardcontent = card.cardcontentlist;

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
        <React.Fragment>
            <div className="background-image-part" ref={backgroundImagePartRef}>
                <div className="menu-card-content-image-holder" >
                    <div className="menu-card-content-image">
                        <img src={image} alt={image}
                            style={parallax}
                        />
                    </div>
                </div>
            </div>

            <div className='py-4 my-3 px-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='title menu-card-content-heading'>
                        <span
                            className='fs-5'
                            dangerouslySetInnerHTML={{
                                __html: cardtitle
                            }}
                        />
                    </div>
                    <FilledButton class={`join-button`} text={"JOIN"} />
                </div>
                <div className='ps-3 mt-4'>
                    <ul className="content">
                        {
                            cardcontent.map((cardcontent, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <li
                                            className='menu-card-content-list'
                                            dangerouslySetInnerHTML={{
                                                __html: cardcontent
                                            }}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MenuCardContent

