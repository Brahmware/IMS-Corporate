import React from 'react'
import FilledButton from '../../components/buttons/FilledButton';
import ImageOverThinImage from '../../components/imageoverimage/ImageOverThinImage'

const HomeAbout = (props) => {
    const images = props.data.elements[0].images;
    const card = props.data.elements[1].card;
    return (
        <div className='section home-about-section white-background'>
            <div className="container">
                <div className="half-devided-section">
                    <div className="image-part">
                        <ImageOverThinImage topImage={images.imageTop} bottomImage={images.imageBottom} />
                    </div>
                    <div className="card-part">
                        <div className="title">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: card.title
                                }}
                            />
                        </div>
                        <div className="subtitle">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: card.subtitle
                                }}
                            />
                        </div>
                        <div className="divider" />
                        <div className="content">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: card.content
                                }}
                            />
                        </div>
                        <FilledButton class={"black-button"} text={"VIEW MORE"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout