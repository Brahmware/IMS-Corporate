import React from 'react'
import CenterAlignedCard from '../../../components/center-aligned-card'
import ReflectionComponent from '../../../components/reflection-component';

const ImageTopCenterAlignedCardComponent = ({ data, dividercolor, largeheading }) => {
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
                        <ReflectionComponent
                            component={
                                <img src={imagedata} alt={carddata.title} style={{ height: 'unset !important'}} />
                            }
                        />
                    </div>
                </div>
                <div className="bottom-half-bg" />
            </div>
            <div className="center-aligned-card-part container">
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