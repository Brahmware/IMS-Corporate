import React, { useState } from 'react';
import { OutboundLinkIcon } from '../../assets/icons';
import FlashcardData from '../../data/flashcard.json';
import useInterval from '../../utils/useInterval';
import ImageComponent from '../image-component';

/* const firstPhoto = FlashcardData[0]; */

const FlashcardComponent = () => {
    const [photoToShow, setPhotoToshow] = useState({});
    const [intervalTime, setIntervalTime] = useState(0);
    const [randomIndex, setRandomIndex] = useState(0);
    
    const DEFAULT_INTERVAL = 10000;
    
    const changePhoto = async () => {
        intervalTime === 0 && setIntervalTime(DEFAULT_INTERVAL);

        let isSame = true;
        while(isSame) {
            let random_index = Math.floor(Math.random() * FlashcardData.length);
            if(random_index !== randomIndex) {
                isSame = false;
            }
            setRandomIndex(random_index);
        }
        setPhotoToshow(FlashcardData[randomIndex]);
    }

    useInterval(changePhoto, intervalTime);

    return (
        <div className='flashcard-component'>
            <div className="image-card">
                <div className="title-link">
                    <div className="title">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: photoToShow.name
                            }}
                        />
                    </div>
                    <a href={photoToShow.link} target="_blank" rel="noopener noreferrer">
                        <i><OutboundLinkIcon /></i>
                    </a>
                </div>
                <div className="overlay" />
                <ImageComponent src={photoToShow.image} deziredaspect={0.75} alt={photoToShow.name} />
            </div>
            <div className="shadow" />
            <div className="information-card">
                <div className="information">
                    <span className="content">
                        {photoToShow.description}
                    </span>
                    <span className='artist'>- {photoToShow.artist}</span>
                </div>
            </div>
        </div>
    )
}

export default FlashcardComponent;