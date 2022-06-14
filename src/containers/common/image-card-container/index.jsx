import React from 'react'
import BookishCard from '../../../components/bookish-card';
import FilledButton from '../../../components/buttons/FilledButton';
import ReflectionComponent from '../../../components/reflection-component';

const ImageCardContainer = (props) => {
    const data = props.data;
    const button = data.card.button && <FilledButton text={data.card.button} class={"black-button"} onClick={props.onClick} />

    return (
        <div className='image-card-container container'>
            <div className={!props.inverse ? "half-devided-section" : "half-devided-section container-inverse"}>
                <div
                    className="image-part"
                    data-aos={!props.inverse ? 'fade-right' : 'fade-left'}
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <ReflectionComponent
                        component={
                            <div className="image-box">
                                <div className="image-holder">
                                    <img src={data.image} alt="container1" />
                                </div>
                            </div>
                        }
                    />
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
                        extracomponents={[button]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageCardContainer