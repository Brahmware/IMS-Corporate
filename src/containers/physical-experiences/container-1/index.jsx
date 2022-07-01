import React from 'react'
import BrandsContainer from '../../common/brandcontainer';

const PhysicalExperiencesContainerOne = (props) => {
    const ourNetworks = props.data;
    return (
        <div
            className='section-with-padding home-our-networks-section physical-experiences-container-1'

        >
            <div className="container">
                <div
                    className="section-title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span>OUR NETWORKS</span>
                </div>
            </div>
            <div className="brands-part">
                <BrandsContainer branddata={ourNetworks} />
            </div>
        </div>
    )
}

export default PhysicalExperiencesContainerOne