import React from 'react'
import BrandsContainer from '../common/brandcontainer';

const HomeNetworks = (props) => {
    const ourNetworks = props.data.elements;
    return (
        <div className='section-with-padding home-our-networks-section'>
            <div className="container">
                <div className="section-title"><span>OUR NETWORKS</span></div>
            </div>
            <div className="brands-part">
                <BrandsContainer branddata={ourNetworks} />
            </div>
        </div>
    )
}

export default HomeNetworks