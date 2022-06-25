import React, { useState } from 'react'
import DownloadImageCard from '../../../components/downloadimagecard';
import FilledButton from '../../../components/buttons/FilledButton';
import GalleryFilter from '../../../components/galleryfilter';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const GalleryFilterContainer = ({ data }) => {


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }



    const [size, setsize] = useState(12);
    const filterData = data[0]
    const cardData = data[1].cards.slice(0, size)

    const handleShow = (e) => {
        // console.log(cardData)
        setShow(true);
    }
    return (
        <div className="filter-download-image-card d-flex">
            <div className="filter position-relative">
                <GalleryFilter data={filterData} />
            </div>
            <div className="gallery-container">
                <ul className="grid" >
                    {cardData.map((card, index) => {
                        return (
                            <div key={index}  >
                                <DownloadImageCard card={card} click={handleShow} />
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