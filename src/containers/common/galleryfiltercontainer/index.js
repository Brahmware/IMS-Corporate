import React, { useState, useRef, useEffect } from 'react'
import DownloadImageCard from '../../../components/downloadimagecard';
import FilledButton from '../../../components/buttons/FilledButton';
import GalleryFilter from '../../../components/galleryfilter';
import Modal from 'react-bootstrap/Modal';

const GalleryFilterContainer = ({ data }) => {
    const positionFixButton = useRef(null);
    const [leftPosition, setleftPosition] = useState(0);
    
    setTimeout(() => {
        setleftPosition(positionFixButton && positionFixButton.current.offsetLeft);
    }, 10);


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const [showModal, setShowModal] = useState(false);
    const handleOnClick = (e) => {
        !showModal && setShowModal(true);
        document.body.style.overflow="hidden";
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
    const closeModal = (event) => {
        let closingPlaces = ['modal-bg', 'close-button'];
        closingPlaces.includes(event.target.id) && setShowModal(false);
        /* console.log(event.target) */
        document.body.style.overflow="";
    }
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
    const [size, setsize] = useState(12);
    const filterData = data[0]
    const cardData = data[1].cards.slice(0, size)

    const handleShow = (e) => {
        // console.log(cardData)
        setShow(true);
    }
    const [cardStyle, setCardStyle] = useState({});
    const [cardStyleInMemo, setCardStyleInMemo] = useState({});
    const handleModalClose = (event) => {

        setCardStyle({
            ...cardStyleInMemo,
            opacity: 0   
        })

        setTimeout(() => {
            closeModal(event);
        }, 200)
    }
    return (
        <div className="filter-download-image-card d-flex" ref={positionFixButton}>
            {
                showModal && 
                <div className="filter-modal-container">
                    <div
                        id="modal-bg"
                        onClick={handleModalClose}
                    />
                    <div className="container">
                        <GalleryFilter data={filterData} />
                    </div>
                </div>
            }
            <div className="filter-btn-holder"
                style={{left: -1*leftPosition}}
            >
                <div className="filter-btn" 
                    onClick={handleOnClick}
                    ref={cardRef}
                >
                    FILTERS
                </div>
            </div>
            <div className="filter position-relative">
                <GalleryFilter data={filterData} />
            </div>
            <div className="gallery-container">
                <ul className="grid" >
                    {cardData.map((card, index) => {
                        return (
                            <div key={index} className="image-parts" >
                                <DownloadImageCard card={card}/>
                            </div>
                        )
                    })}
                </ul>
                <Modal
                    // {...props}
                    show={show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <div
                        className="info-part"
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='300'>
                        <div className="image-part">
                            <img src={cardData[0].images} alt="" />

                        </div>
                        <div className="content-part">
                            <div className="title">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: "Penguin in antarctica"
                                    }}
                                />
                            </div>
                            <div className="subtitle">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: "Wildlife"
                                    }}
                                />
                            </div>
                            <div className="content">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: "Premium Resource"
                                    }}
                                />
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: "Editorial Use"
                                    }}
                                />
                            </div>
                            <div className="paragraph">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: "Penguin standing on the snow during Daytime"
                                    }}
                                />
                            </div>
                            <div className="button-group">
                                <button className="btn btn-primary">
                                    download
                                </button>
                                <button className="btn btn-outline-primary">
                                    share
                                </button>
                            </div>
                        </div>
                    </div>


                    <button className="btn btn-outline-primary" onClick={handleClose}>close</button>
                </Modal>
                <div
                    className="button-part"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='400'
                >
                    <FilledButton text={(data[1].cards.length !== size) ? "VIEW MORE" : "VIEW LESS"} class={"black-button"}
                        onClick={() => {
                            setsize((data[1].cards.length !== size) ? ((size + 6 > data[1].cards.length) ? data[1].cards.length : size + 6) : 12)
                        }}
                    />
                </div>
            </div >

        </div >
    )
}

export default GalleryFilterContainer