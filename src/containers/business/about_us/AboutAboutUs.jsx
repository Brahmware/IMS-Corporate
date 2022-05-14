import React from 'react'

import ImageOverThinImage from '../../../components/imageoverimage/ImageOverThinImage'

const AboutAboutUs = (props) => {
  const images = props.data.elements[1].image;
  const card = props.data.elements[0].card;
  return (
    <div className='section home-immersive-learning-section white-background'>
      <div className="container imageoverimage-card-container">
        <div className={!props.inverse ? "half-devided-section" : "half-devided-section container-inverse"}>
          <div className="image-part">
            <ImageOverThinImage topImage={images} bottomImage={images}  />
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
            {/* <FilledButton class={"black-button"} text={card.buttontext ? card.buttontext : "VIEW MORE"} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAboutUs