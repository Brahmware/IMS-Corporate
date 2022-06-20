import React from 'react'
import TabBoxImageBackground from '../../../containers/common/tabbox-image-background';

const SustainabilityStatementContainerFour = ({ data }) => {
    const cardData=data[0].cards;
    return (
        <div className='sustainabilitystatement-container-4 white-background pb-5'>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 tab-box-container">
                    {
                        cardData.map((card, index) => {
                            return (
                                <TabBoxImageBackground data={card} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SustainabilityStatementContainerFour