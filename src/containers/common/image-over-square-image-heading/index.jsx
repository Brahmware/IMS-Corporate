import React from 'react'
import BookishCard from '../../../components/bookish-card'
import CenterAlignedCard from '../../../components/center-aligned-card'
import ImageOverSquareImage from '../../../components/imageoverimage/ImageOverSquareImage'

const ImageOverSquareImageHeadingContainer = (props) => {
    return (
        <div className='image-over-square-image-with-heading'>
            <div className="container">
                <div className="about-us-container-2-heading section-with-padding">
                    <CenterAlignedCard
                        title={props.headertitle}
                        subtitle={props.headersubtitle}
                        content={props.headercontent}
                        dividercolor={"primary"}
                    />
                </div>
                <div className="about-us-container-2-desc section-with-padding">
                    <div className="odd-divided-section">
                        <BookishCard
                            subtitle={props.bookishsubtitle}
                            content={props.bookishcontent}
                            extracomponents={props.bookishButtonComponent}
                            inverse={true}
                        />
                        <ImageOverSquareImage
                            imageBottom={props.imageBottom}
                            imageTop={props.imageTop}
                        />
                    </div>
                </div>
            </div>
            <div
                className="container divider-container"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='300'
            >
                <div className="divider bottom-divider" />
            </div>
        </div>
    )
}

export default ImageOverSquareImageHeadingContainer