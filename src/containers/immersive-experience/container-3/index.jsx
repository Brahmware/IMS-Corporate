import React from 'react'
import BrandsContainer from '../../common/brandcontainer';

const BusinessAndBrandsContainerOne = (props) => {
    const ourNetworks = props.data;
    return (
        <div
            className='section-with-padding home-our-networks-section'

        >
            <div className="container">
                <div
                    className="section-title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span>EDUCATION PRODUCTION & DISTRIBUTION PARTNERS</span>
                </div>
            </div>
            <div className="brands-part">
                <BrandsContainer branddata={ourNetworks} />
            </div>
        </div>
    )
}

export default BusinessAndBrandsContainerOne