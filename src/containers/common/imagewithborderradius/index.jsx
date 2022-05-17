import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'
import OneImageWithBorderRadius from '../../../components/oneimage/OneImageWithBorderRadius'

const ImageWithBorderRadius = (props) => {
    const images = props.containerData.elements[0].images;
    // console.log(images)
    const card = props.containerData.elements[1].card;
    // console.log(props)
    return (
        <div className="container imageoverimage-card-container">
            <div className={!props.inverse ? "half-devided-section" : "half-devided-section container-inverse"}>
                <div className="image-part">
                    <OneImageWithBorderRadius image={images} inverse={props.inverse} />
                </div>
                <div
                    className="card-part"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
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
                    <FilledButton class={"black-button"} text={card.buttontext ? card.buttontext : "VIEW MORE"} />
                </div>
            </div>
        </div>
    )
}

export default ImageWithBorderRadius