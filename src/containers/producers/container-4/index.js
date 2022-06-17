import React from 'react'
import TabBoxContainer from '../../../containers/common/tabbox-image-background';

const ProducersContainerFour = ({ data }) => {
    const cardData=data[0].cards;
    return (
        <div className='producers-container-4 section'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 tab-box-container">
                    {
                        cardData.map((card, index) => {
                            return (
                                <TabBoxContainer data={card} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProducersContainerFour