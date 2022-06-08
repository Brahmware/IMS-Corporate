import React from 'react'
import BrandsContainer from '../../common/brandcontainer';

const CorporateAndFoundationContainerFour = (props) => {
    const ourNetworks = props.data;
    return (
        <div
            className='section-with-padding our-partners-section home-our-networks-section corporate-and-foundations-container-4'
        >
            <div className="container">
                <div
                    className="section-title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span>OUR PARTNERS</span>
                </div>
            </div>
            <div className="brands-part">
                <BrandsContainer branddata={ourNetworks} />
            </div>
        </div>
    )
}

export default CorporateAndFoundationContainerFour