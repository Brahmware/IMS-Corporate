import React from 'react'
import TabBoxImageBackground from '../../../containers/common/tabbox-image-background';

const ProducersContainerFour = ({ data ,url}) => {
    const cardData=data[0].cards;
    return (
        <div className='producers-container-4 section pb-5 mb-5'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 tab-box-container">
                    {
                        cardData.map((card, index) => {
                            return (
                                <TabBoxImageBackground data={card} key={index} tabkey={index} url={url} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProducersContainerFour