import React from 'react'
import TabBoxContainer from '../../../containers/common/tabbox-image-background';

const ProfessionalLearningContainerThree = ({ data }) => {
    const cardData = data[0].cards;
    return (
        <div className='technology-container-4 white-background pb-5'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 tab-box-container pt-5 mt-0">
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

export default ProfessionalLearningContainerThree