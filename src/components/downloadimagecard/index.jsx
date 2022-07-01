import React, { useRef, useState } from 'react'
import { DownloadButton, CrownIcon } from '../../assets/icons'
import ModalContainer from '../../containers/common/modal-container';
import disableScroll from 'disable-scroll';
import { useEffect } from 'react';

const DownloadImageCard = ({ card  }) => {

    const [showModal, setShowModal] = useState(false);

    const handleOnClick = () => {
        !showModal && setShowModal(true);
    }

    const closeModal = (event) => {
        let closingPlaces = ['modal-bg', 'close-button'];
        closingPlaces.includes(event.target.id) && setShowModal(false);
        /* console.log(event.target) */
    }

    useEffect(() => {
        showModal ? disableScroll.on() : disableScroll.off()
    }, [showModal])

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
    return (
        <React.Fragment>
            <li
                className="grid-figure"
                onClick={handleOnClick}
                ref={cardRef}
            >
                {
                    showModal && <ModalContainer data={card} closeModal={closeModal} contLocPage={cardDimension}/>
                }
                <div className="wrap-shadow">
                    <div className="grid-figure-shadow" >
                        <DownloadButton className='grid-figure-shadow-icon' />
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
