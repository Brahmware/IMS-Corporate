import React from 'react'
import CenterAlignedCard from '../../../components/center-aligned-card'

const ImageTopCenterAlignedCardComponent = ({ data, dividercolor ,largeheading}) => {
    const carddata = data && data.card;
    const imagedata = data && data.image;

    return (
        <div className='image-top-center-aligned-card-component'>
            <div className="image-part">
                <div className="top-half-bg white-background" />
                <div
                    className="image-holder"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <div className="centered-aligned-image">
                        <img src={imagedata} alt={carddata.title} />
                    </div>
                </div>
                <div className="bottom-half-bg" />
            </div>
            <div className="center-aligned-card-part section-with-padding">
                <CenterAlignedCard
                    title={carddata.title}
                    subtitle={carddata.subtitle}
                    content={carddata.content}
                    dividercolor={dividercolor}
                    largeheading={largeheading}
                />
            </div>
        </div>
    )
}

export default ImageTopCenterAlignedCardComponent