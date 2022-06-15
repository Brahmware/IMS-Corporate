import React from 'react'
import CenterAlignedCard from '../../../components/center-aligned-card'
import MembershipCard from '../../../components/membership-card';
import TabBoxContainer from '../../../containers/common/tabbox-image-background';

const ProducersContainerThree = ({ data }) => {
    const title=data[0].title;
    const subtitle=data[0].subtitle;
    const membershipCardData=data[0].membershipcard;
    const cardData=data[0].cards;
    return (
        <div className='aboutus-container-2 section-with-padding'>
            <CenterAlignedCard
                title = {title}
                subtitle = {subtitle}
                dividercolor = {"primary"}
            />
            <div className="section-with-padding">
                <div className="container">
                    <MembershipCard cardData={membershipCardData} />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 tab-box-container">
                        <TabBoxContainer data={cardData} />
                        <TabBoxContainer data={cardData} />
                        <TabBoxContainer data={cardData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProducersContainerThree