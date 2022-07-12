import React from 'react'
import ReflectionComponent from '../../reflection-component';


const ImageOnly = (props) => {
    const elements=props.elements[0];
    return (
        <>
            <div
                className={props.type}
                data-aos="fade-right"
                data-aos-duration='600'
                data-aos-delay='300'
            >
                <ReflectionComponent
                    component={
                        <div className="image-box h-100">
                            <div className="image-holder h-100">
                                <img src={elements.image} alt="container1" />
                            </div>
                        </div>
                    }
                />
            </div>
        </>
    )
}

export default ImageOnly