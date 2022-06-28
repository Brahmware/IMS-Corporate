import React, { useState } from 'react'
import DownloadImageCard from '../../../components/downloadimagecard';
import FilledButton from '../../../components/buttons/FilledButton';
import GalleryFilter from '../../../components/galleryfilter';

const GalleryFilterContainer = ({ data }) => {
    
    const [size, setsize] = useState(12);
    const filterData=data[0]
    const cardData=data[1].cards.slice(0,size)
    
    return (
        <div className="filter-download-image-card d-flex">
            <div className="filter position-relative">
                <GalleryFilter data={filterData} />
            </div>
            <div className="gallery-container">
                <ul className="grid">
                            <DownloadImageCard card={cardData[0]} temp={true} />
                    {cardData.map((card, index) => {
                        return (
                            <DownloadImageCard card={card} key={index}/>
                        )
                    })}
                </ul>
                <div 
                    className="button-part"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='400'
                >
                    <FilledButton text={(data[1].cards.length!==size) ?"VIEW MORE": "VIEW LESS"} class={"black-button"} 
                        onClick={() => {
                            setsize((data[1].cards.length!==size)?((size+6>data[1].cards.length)?data[1].cards.length:size+6): 12)
                        }} 
                    />
                </div>
            </div>

        </div>
    )
}

export default GalleryFilterContainer