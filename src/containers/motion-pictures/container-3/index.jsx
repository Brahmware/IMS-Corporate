import React, { useState } from 'react'
import NewsCards from '../../../components/news-cards';
import FilledButton from '../../../components/buttons/FilledButton';

const MotionPicturesContainerThree = ({ data }) => {
    const [slice, setSlice] = useState(6);
    const cardsData = data[0].cards.splice(0, slice)
    return (
        <React.Fragment>
            <div className={`newsroom-container-2 section-with-padding white-background py-3 d-flex flex-column align-items-center`}>
                <div className='py-5 container'>
                    <div className=" row row-cols-1 row-cols-md-3 g-5">
                        {
                            cardsData.map((cardData, key) => {
                                return (
                                    <React.Fragment key={key} >
                                        <NewsCards data={cardData} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="button-part">
                    <FilledButton text={"SHOW ALL"} class={"black-button"} onClick={() => {
                        setSlice(data[0].cards.length)

                    }} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MotionPicturesContainerThree