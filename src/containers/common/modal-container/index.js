import { Button } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react';
import { CloseIcon, DownloadButton , CrownIcon, InfoIcon, TickMarkIcon} from '../../../assets/icons';
import ImageComponent from '../../../components/image-component';
import FilledButton from '../../../components/buttons/FilledButton';
import HollowButton from '../../../components/buttons/HollowButton';

const ModalContainer = ({ data, contLocPage, closeModal }) => {

    const header = document.querySelector(".header");
    const headerHeight = header && header.getBoundingClientRect().height;
    const [modalStyle, setModalStyle] = useState({ paddingTop: headerHeight });

    useEffect(() => {
        const handleScroll = () => {
            setModalStyle({
                paddingTop: headerHeight
            });
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headerHeight]);

    const [cardStyle, setCardStyle] = useState({});
    const [cardStyleInMemo, setCardStyleInMemo] = useState({});

    const cardRef = useCallback((node) => {
        if(node !== null) {
            let boundingRect = node.getBoundingClientRect();
            let scaleX = contLocPage.width / boundingRect.width;
            let scaleY = contLocPage.height / boundingRect.height;
            let translateX = contLocPage.left - boundingRect.left;
            let translateY = contLocPage.top - boundingRect.top;

            console.log(translateX)
            setCardStyle({
                transform: `scale(${scaleX}, ${scaleY}) translateX(${translateX}px) translateY(${translateY}px)`,
                transition: 'none',
                opacity: 0
            });
            
            setCardStyleInMemo({
                transform: `scale(${scaleX}, ${scaleY}) translateX(${translateX}px) translateY(${translateY}px)`
            });
        }
    }, [contLocPage.height, contLocPage.left, contLocPage.top, contLocPage.width]);

    useEffect(() => {
        let t = setTimeout(() => {
            setCardStyle({
                transition: 'all 600ms ease 0s',
                opacity: 1
            })
        }, 1)

        return () => clearTimeout(t)
    }, [])

    useEffect(() => {
        let t = setTimeout(() => {
            setCardStyle({
                transform: `scale(${1}) translateX(${0}px) translateY(${0}px)`
            })
        }, 600)

        return () => clearTimeout(t)
    }, [])

    const handleModalClose = (event) => {

        setCardStyle({
            ...cardStyleInMemo,
            opacity: 0   
        })

        setTimeout(() => {
            closeModal(event);
        }, 600)
    }
    const moreCardData=[
        {
            "images": "/images/education-and-teaching/resources/container-1/cover.jpg",
            "title": "Penguins in Antartica",
            "description": "Penguins Standing on the Snow during Daytime",
            "type": "Wildlife",
            "lisense": "Editorial Use",
            "premium": true,
            "price": "300"
        },
        {
            "images": "/images/education-and-teaching/resources/container-3/cover.jpg",
            "title": "Penguins in Antartica",
            "type": "Ancient Indian History",
            "description": "Penguins Standing on the Snow during Daytime",
            "lisense": "Editorial Use",
            "premium": false,
            "price": "300"
        },
        {
            "images": "/images/education-and-teaching/resources/container-4/cover.jpg",
            "title": "Penguins in Antartica",
            "type": "Ancient Indian History",
            "description": "Penguins Standing on the Snow during Daytime",
            "lisense": "Editorial Use",
            "premium": false,
            "price": "300"
        },
        {
            "images": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MzgyNTIzMF5BMl5BanBnXkFtZTgwODg1OTY1MDI@._V1_UX140_C R0,0,140,209_AL_.jpg",
            "title": "Penguins in Antartica",
            "type": "Ancient Indian History",
            "description": "Penguins Standing on the Snow during Daytime",
            "lisense": "Editorial Use",
            "premium": false,
            "price": "300"
        },
        {
            "images": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNDA1NjcwN15BMl5BanBnXkFtZTgwMDY0MDA2MDI@._V1_UY209_C R0,0,140,209_AL_.jpg",
            "title": "Penguins in Antartica",
            "type": "Ancient Indian History",
            "description": "Penguins Standing on the Snow during Daytime",
            "lisense": "Editorial Use",
            "premium": false,
            "price": "300"
        },
        {
            "images": "/images/education-and-teaching/resources/container-4/cover.jpg",
            "title": "Penguins in Antartica",
            "type": "Ancient Indian History",
            "description": "Penguins Standing on the Snow during Daytime",
            "lisense": "Editorial Use",
            "premium": false,
            "price": "300"
        },
    ]

    return (
        <div
            id='modal-bg'
            className='modal-container '
            style={modalStyle}
                onClick={handleModalClose}
        >
            <div 
                className="image-content-area" 
                id='image-content-area' 
                style={cardStyle}
                ref={cardRef}
            >
                <div className="close-button" id='close-button'>
                    <CloseIcon />
                </div>
                <div className="image-details-area">
                    <div className="image"
                    // data-aos='fade-right'
                    //     data-aos-duration='600'
                    //     data-aos-delay='400'
                    >
                        <ImageComponent src={data.images} deziredaspect={1.2903} alt={data.description} />
                    </div>
                    <div className="details-buttons "
                    data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='400'
                    >
                        <div className='details w-100'>
                            <div className="modalcard-title">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: data.title
                                    }}
                                />
                            </div>
                            <div className="card-type">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: data.type
                                    }}
                                />
                            </div>
                            <div className="features">
                                <div className="premium features-content">
                                    <span className="icon">
                                        <CrownIcon/>
                                    </span>
                                    <span className="text">
                                        {
                                            data.premium ? 
                                            "Premium Resource" :
                                            "Free Resource"
                                        }
                                    </span>
                                </div>
                                <div className="lisense features-content">
                                    <span className='icon'>
                                        <TickMarkIcon/>
                                    </span>
                                    <span className='text' >{data.lisense}</span>
                                </div>
                            </div>
                            <div className="card-description w-75">
                                <span className="icon">
                                    <InfoIcon/>
                                </span>
                                <span
                                    className='text'
                                    dangerouslySetInnerHTML={{
                                        __html: data.description
                                    }}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <FilledButton text={"DOWNLOAD"} class={"black-button"} 
                            />
                            <HollowButton text="SHARE" class="black-button rounded-pill ms-3" />
                            {/* <FilledButton text="Share"/> */}
                        </div>
                    </div>
                </div>
                <div className="more-like-this-area">
                    <div className="heading">
                        <span
                            data-aos='fade-right'
                            data-aos-duration='600'
                            data-aos-delay='400'
                        >
                            More like this
                        </span>
                        <a href=""
                            data-aos='fade-right'
                            data-aos-duration='800'
                            data-aos-delay='600'
                        >See All</a>
                    </div>
                    <div className="recommended-cards">
                        {moreCardData.map((card, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="modal-cards"
                                        data-aos='fade-left'
                                        data-aos-duration='600'
                                        data-aos-delay={100+(index*200)}
                                    >
                                        <div className="modal-card-filter">
                                            <div className="card-shadow" >
                                                <DownloadButton className='grid-figure-shadow-icon' />
                                                {
                                                    card.premium &&
                                                    <div className="grid-figure-crown">
                                                        <CrownIcon />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className={`recommended-card-image`} >
                                            <img src={card.images} alt={card.description} />
                                        </div>
                                        <div className="recommended-card-content">
                                            <div className="content-title"
                                            >
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: card.title
                                                    }}
                                                />
                                            </div>
                                            <div className="content-subtitle"
                                            >
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: card.type
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalContainer