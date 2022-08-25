import React from 'react'
import HollowButton from '../../../components/buttons/HollowButton'
import ParallaxImageComponent from '../../../components/parallax-image-component';
import {Link} from "react-router-dom"

const CardOverRibbonImageContainer = ({ cardribbondata }) => {
    return (
        <div className='section card-over-ribbon-image-container'>
            <div className="image-part">
                <ParallaxImageComponent image={cardribbondata.image} alt={cardribbondata.title} filter={true}/>
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
                                <Link to={!cardribbondata.path?"/":cardribbondata.path}><HollowButton class={"hollow-button white-button"} text={cardribbondata.buttontext} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOverRibbonImageContainer