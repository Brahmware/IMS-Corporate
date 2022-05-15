import React from 'react'
import HollowButton from '../../../components/buttons/HollowButton'

const CardOverRibbonImageContainer = ({ cardribbondata }) => {
    return (
        <div className='section card-over-ribbon-image-container'>
            <div className="background-image-holder">
                <div className="background-image">
                    <img src={cardribbondata.image} alt={cardribbondata.title} />
                </div>
            </div>
            <div className="card-part">
                <div className="container">
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
    )
}

export default CardOverRibbonImageContainer