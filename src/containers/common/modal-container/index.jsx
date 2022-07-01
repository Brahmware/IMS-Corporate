import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { CloseIcon } from '../../../assets/icons';
import ImageComponent from '../../../components/image-component';

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

    return (
        <div
            className='modal-container'
            style={modalStyle}
        >
            <div 
                id="modal-bg" 
                onClick={handleModalClose}
            />
            <div 
                className="image-content-area" 
                id='image-content-area' 
                style={cardStyle}
                ref={cardRef}
            >
                <div className="close-button" id='close-button' onClick={handleModalClose}>
                    <CloseIcon />
                </div>
                <div className="image-details-area">
                    <div className="image">
                        <ImageComponent src={data.images} deziredaspect={1.2903} alt={data.description} />
                    </div>
                    <div className="details">
                        <div className="card-title">
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
                            <div className="premium">
                                {
                                    data.premium ? 
                                    "Premium Resource" :
                                    "Free Resource"
                                }
                            </div>
                            <div className="lisense">
                                <span>{data.lisense}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-like-this-area">

                </div>
            </div>
        </div>
    )
}

export default ModalContainer