import React from 'react'
import CenterAlignedCard from '../../../components/center-aligned-card'
import MembershipCard from '../../../components/membership-card';

const AdvertiseWithUsThree = ({ data }) => {
    const title=data[0].title;
    const subtitle=data[0].subtitle;
    const cardData=data[0].cards;
    return (
        <div className='advertisewithus-container-3 section-with-padding'>
            <CenterAlignedCard
                title = {title}
                subtitle = {subtitle}
                dividercolor = {"primary"}
            />
            <div className="section-with-padding">
                <div className="container">
                    <MembershipCard cardData={cardData} />
                </div>
            </div>
        </div>
    )
}

export default AdvertiseWithUsThree