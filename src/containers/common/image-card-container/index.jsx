import React from 'react'
import BookishCard from '../../../components/bookish-card';

const ImageCardContainer = (props) => {
    const data = props.data;
    return (
        <div className='image-card-container container'>
            <div className={!props.inverse ? "half-devided-section" : "half-devided-section container-inverse"}>
                <div 
                    className="image-part"
                    data-aos={!props.inverse ? 'fade-right' : 'fade-left'}
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <div className="image-box">
                        <div className="image-holder">
                            <img src={data.image} alt="container1" />
                        </div>
                    </div>
                </div>
                <div
                    className="card-part bookish-card"
                    data-aos={!props.inverse ? 'fade-left' : 'fade-right'}
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <BookishCard 
                        title={data.card.title}
                        subtitle={data.card.subtitle}
                        content={data.card.content}
                        inverse={props.inverse}
                        button = {data.card.button}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageCardContainer