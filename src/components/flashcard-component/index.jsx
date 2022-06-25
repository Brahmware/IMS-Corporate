import React, { useEffect, useState } from 'react';
import { OutboundLinkIcon } from '../../assets/icons';
import FlashcardData from '../../data/flashcard.json';
import ImageComponent from '../image-component';

const FlashcardComponent = () => {

    let [photoToShow, setPhotoToshow] = useState(FlashcardData[0]);

    let INTERVAL = 10000; // How long a photo exists on screen
    let ANIMATION_TIME = 600;

    let changePhoto = () => {
        let random_index = Math.floor(Math.random() * FlashcardData.length)
        let fetched_photo = FlashcardData[random_index];
        /* let informationCard = document.getElementsByClassName('information-card')[0];

        setTimeout(() => {
            informationCard.classList.remove('slide-back');
        }, ANIMATION_TIME)

        setTimeout(() => {
            informationCard.classList.add('slide-back')
        }, INTERVAL - ANIMATION_TIME) */
        setPhotoToshow(fetched_photo)
    }


    useEffect(() => {
        let settingPhoto = setInterval(() => { changePhoto() }, INTERVAL)
        return () => clearInterval(settingPhoto)
    }, [INTERVAL])


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