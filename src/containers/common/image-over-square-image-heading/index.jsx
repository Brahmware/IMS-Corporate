import React from 'react'
import BookishCard from '../../../components/bookish-card'
import CenterAlignedCard from '../../../components/center-aligned-card'
import ImageOverSquareImage from '../../../components/imageoverimage/ImageOverSquareImage'

const ImageOverSquareImageHeadingContainer = ( props ) => {
    return (
        <div className='image-over-square-image-with-heading'>
            <div className="container">
                <div className="about-us-container-2-heading section-with-padding">
                    <CenterAlignedCard
                        title={props.headertitle}
                        subtitle={props.headersubtitle}
                        content={props.headercontent}
                        dividercolor = {"primary"}
                    />
                </div>
                <div className="about-us-container-2-desc section-with-padding">
                    <div className="half-devided-section">
                        <BookishCard
                            subtitle={props.bookishsubtitle}
                            content={props.bookishcontent}
                            extracomponents={props.bookishButtonComponent}
                        />
                        <ImageOverSquareImage
                            imageBottom={props.imageBottom}
                            imageTop={props.imageTop}
                        />
                    </div>
                </div>
            </div>
            <div className="container divider-container">
                <div className="divider bottom-divider" />
            </div>
        </div>
    )
}

export default ImageOverSquareImageHeadingContainer