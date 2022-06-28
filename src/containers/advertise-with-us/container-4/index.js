import React from 'react'
import TabBoxContainer from '../../../containers/common/tabbox-image-background';

const AdvertiseWithUsFour = ({ data }) => {
    const cardData=data[0].cards;
    return (
        <div className='advertisewithus-container-4 section pb-5 mb-5'>
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

export default AdvertiseWithUsFour