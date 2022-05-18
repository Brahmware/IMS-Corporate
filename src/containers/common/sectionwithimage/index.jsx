import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'
import TwoImage from '../../../components/twoimage/TwoImage';

const SectionWithImage = (props) => {
    const images = props.containerData.elements[0].images;
    const card = props.containerData.elements[1].card;
    return (
        <div className="container imageoverimage-card-container">
            <div className={!props.inverse ? " half-devided-section-with-two-images" : " half-devided-section-with-two-images container-inverse"}>
                <div className="image-part">
                    <TwoImage topImage={images.topImage} bottomImage={images.bottomImage} inverse={props.inverse} />
                </div>
                <div
                    className="card-part"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <div className="subtitle">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: card.subtitle
                            }}
                        />
                    </div>
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
            <div className="line" >
                <div className="divider" />
            </div >
        </div>
    )
}

export default SectionWithImage