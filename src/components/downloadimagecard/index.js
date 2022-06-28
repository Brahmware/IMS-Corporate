import React, { useCallback, useRef, useState } from 'react'
import { DownloadButton, CrownIcon, CloseIcon } from '../../assets/icons/'

const DownloadImageCard = ({ card, temp}) => {
    const modalImageRef=useCallback();
    const imageRef=useRef();
    const [styles, setstyles] = useState({})
    const [blurClass, setblurClass] = useState("")
    const [temp2, settemp2] = useState("")
    const handleModal=()=>{
        setblurClass("blur-bg")
        document.body.style.overflow = 'hidden';
        setstyles({
            "position": "fixed",
            "top": "30%"

        });

        settemp2("games")
        const cardPosition={
            "left" : imageRef.current && imageRef.current.offsetLeft,
            "top" : imageRef.current && imageRef.current.offsetTop,
            "height" : imageRef.current && imageRef.current.height,
            "width" : imageRef.current && imageRef.current.width
        }
        // const modalPosition={
        //     "left" : modalImageRef.current && modalImageRef.current.offsetLeft,
        //     "top" : modalImageRef.current && modalImageRef.current.offsetTop,
        //     "height" : modalImageRef.current && modalImageRef.current.height,
        //     "width" : modalImageRef.current && modalImageRef.current.width
        // }
        console.log(modalImageRef);
    }
    const removeModal=()=>{
        document.body.style.overflow = 'unset';
        console.log("test1");
        setblurClass("");
        setstyles({});
    }

    return (
        <>
            <li className="grid-figure" >
                <div className="wrap-shadow">
                    <div  
                        onClick={handleModal} 
                        className="grid-figure-shadow" 
                    // style={{"zIndex": "2"}}
                    >
                        <DownloadButton className='grid-figure-shadow-icon' />
                        {
                            card.premium &&
                                <div className="grid-figure-crown">
                                    <CrownIcon/>
                                </div>
                        }
                    </div>
                </div>
                <div className={`image-container ${temp2}`} style={{...styles, "transition": "all 1s linear"}}>
                    <img
                        // style={{...styles}} 
                        ref={imageRef}
                        src={card.images} 
                        alt="" 
                    />
                </div>
                
                    <div className={`non-blur ${blurClass}`}>
                    {
                        blurClass==="blur-bg" &&
                        <>
                            <div onClick={removeModal} className="click-page"></div>
                            {/* <div className="modal-container">
                                <div className="close-button">
                                    <CloseIcon onClick={removeModal} />
                                </div>
                                <div className="modal-content">
                                    
                                    <div 
                                        
                                        className="modal-image de">
                                        
                                        <img src={card.images} alt="" />
                                    </div>
                                    
                                    <div className="modal-text-content"></div>
                                </div>
                                
                            </div> */}
                        </>
                    }
                </div>
                
                
                <div className="bold-paragraph grid-figure-title"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='400'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.title
                        }}
                    />
                </div>
                
                <div className="content grid-figure-subtitle"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='500'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.type
                        }}
                    />
                </div>
            </li>
        </>
    )
}

export default DownloadImageCard
