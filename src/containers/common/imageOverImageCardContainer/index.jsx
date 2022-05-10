import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'
import ImageOverThinImage from '../../../components/imageoverimage/ImageOverThinImage'

const ImageOverImageCardContainer = (props) => {
    const images = props.containerData.elements[0].images;
    const card = props.containerData.elements[1].card;
    return (
        <div className="container imageoverimage-card-container">
            <div className={!props.inverse ? "half-devided-section" : "half-devided-section container-inverse"}>
                <div className="image-part">
                    <ImageOverThinImage topImage={images.imageTop} bottomImage={images.imageBottom} inverse={props.inverse}/>
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
                    <FilledButton class={"black-button"} text={ card.buttontext ? card.buttontext : "VIEW MORE"} />
                </div>
            </div>
        </div>
    )
}

export default ImageOverImageCardContainer