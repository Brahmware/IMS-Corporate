import React from 'react'
import TabBoxContainer from '../../../containers/common/tabbox-image-background';

const InvestorsContainerThree = ({ data,url }) => {
    const cardData = data[0].cards;
    return (
        <div className='advertisewithus-container-3 white-background'>
            {/* <div className="section-with-padding"> */}
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 tab-box-container pt-5 mt-0">
                    {
                        cardData.map((card, index) => {
                            return (
                                <TabBoxContainer data={card} key={index} url={url} />
                            )
                        })
                    }
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default InvestorsContainerThree