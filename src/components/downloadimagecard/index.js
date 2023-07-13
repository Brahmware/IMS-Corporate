import React, { useRef, useState } from 'react'
import { DownloadButton, CrownIcon } from '../../assets/icons'
import ModalContainer from '../../containers/common/modal-container';
import { useEffect } from 'react';

const DownloadImageCard = ({ card  }) => {
    const [data, setdata] = useState({...card});

    const [showModal, setShowModal] = useState(false);
    function download(source){
        const fileName = source.split('/').pop();
        var el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }
    const handleOnClick = (e) => {
        if(e.target.id==='download-btn' && card.premium!==true){
            download(card.images)
            return;
        }
        !showModal && setShowModal(true);
        document.body.style.overflow="hidden";
    }

    const closeModal = (event) => {
        let closingPlaces = ['modal-bg', 'close-button'];
        closingPlaces.includes(event.target.id) && setShowModal(false);
        document.body.style.overflow="";
    }

    const cardRef = useRef(null);
    let boundingRect = cardRef.current && cardRef.current.getBoundingClientRect();
    const [cardDimension, setCardDimensions] = useState({
        bottom: boundingRect && boundingRect.bottom,
        height: boundingRect && boundingRect.height,
        left: boundingRect && boundingRect.left,
        right: boundingRect && boundingRect.right,
        top: boundingRect && boundingRect.top,
        width: boundingRect && boundingRect.width,
    });

    useEffect(() => {
        let handleScroll = () => {
            let boundingRect = cardRef.current && cardRef.current.getBoundingClientRect();
            setCardDimensions({
                bottom: boundingRect.bottom,
                height: boundingRect.height,
                left: boundingRect.left,
                right: boundingRect.right,
                top: boundingRect.top,
                width: boundingRect.width,
            })
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [cardRef])
    const handleChange=(e,cardData)=>{
        if(e.target.id==="download-btn-2" && cardData.premium!==true){
            download(cardData.images)
            return;
        }
        setdata({...cardData});
    }
    return (
        <React.Fragment>
            <li
                className="grid-figure"
                onClick={handleOnClick}
                ref={cardRef}
            >
                {
                    showModal && <ModalContainer data={data} handleChange={handleChange} closeModal={closeModal} contLocPage={cardDimension}/>
                }
                <div className="wrap-shadow">
                    <div className="grid-figure-shadow" >
                        <a className='download-btn' >
                            <div id='download-btn' className="download-btn-cover"></div>
                            <DownloadButton/>
                        </a>
                        {
                            card.premium &&
                            <div className="grid-figure-crown">
                                <CrownIcon />
                            </div>
                        }
                    </div>
                </div>
                <div className={`image-container`} >
                    <img src={card.images} alt={card.description} />
                </div>
                <div className="content">
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
                    <div className="grid-figure-subtitle"
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
                </div>
            </li>
        </React.Fragment>
    )
}

export default DownloadImageCard
