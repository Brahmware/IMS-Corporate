import React from 'react'
import ReflectionComponent from '../../reflection-component';


const ImageWithText = (props) => {
    const elements=props.elements[0];
    return (
        <>
            <div className={props.type} style={{flexDirection: (elements.position==="left"?"row": "row-reverse")}} >
                <div
                    className="image-part"
                    style={{float: elements.position, marginRight: (elements.position==="left"?"2em":"0em"), marginBottom: "1em", marginLeft: (elements.position==="left"?"0em":"2em") }}
                    data-aos={(elements.position==="left"?"fade-right": "fade-left")}
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
                <div className="text-part"
                    data-aos={(elements.position==="left"?"fade-left": "fade-right")}
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: elements.text
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default ImageWithText