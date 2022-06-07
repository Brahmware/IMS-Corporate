import React from 'react'
import BigNewsCards from '../../../components/big-news-card';

const NewsRoomContainerOne = ({ data }) => {
    const cardsData = data[0].cards;
    return (
        <React.Fragment>
            <div className={`newsroom-container-1 seciton-with-padding white-background py-3`}>
                <div className='in-newsroom-container-1 container d-flex'>
                    <div className="highlighted-news-card">
                        <BigNewsCards data={cardsData[0]} />
                    </div>
                    <div className="other-news-card">
                        {
                            cardsData.map((cardData, key) => {
                                return (
                                    <React.Fragment key={key} >
                                        {
                                            key !== 0 && <img className='other-news-card-image' src={cardData.images} alt="" />
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewsRoomContainerOne