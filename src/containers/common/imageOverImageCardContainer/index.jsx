import React from 'react'
import { useHistory } from 'react-router-dom';
import BookishCard from '../../../components/bookish-card';
import FilledButton from '../../../components/buttons/FilledButton'
import ImageOverThinImage from '../../../components/imageoverimage/ImageOverThinImage'

const ImageOverImageCardContainer = (props) => {
    const images = props.containerData[0].images;
    const card = props.containerData[1].card;
    const history = useHistory();

    const ButtonComponent = 
    <FilledButton 
        class={"black-button"} 
        text={card.buttontext ? card.buttontext : "VIEW MORE"}
        onClick={() => history.push("/")}
    />

    return (
        <div className="container imageoverimage-card-container">
            <div className={!props.inverse ? "half-devided-section" : "half-devided-section container-inverse"}>
                <div className="image-part">
                    <ImageOverThinImage topImage={images.imageTop} bottomImage={images.imageBottom} inverse={props.inverse} />
                </div>
                <div
                    className="card-part bookish-card"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <BookishCard
                        title={card.title}
                        subtitle={card.subtitle}
                        content={card.content}
                        extracomponents={[ButtonComponent]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageOverImageCardContainer