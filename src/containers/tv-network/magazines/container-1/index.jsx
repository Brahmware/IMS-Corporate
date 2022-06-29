import React from 'react'
import BrandsContainer from '../../../common/brandcontainer';

<<<<<<< HEAD:src/containers/tv-network/magazines/container-1/index.jsx
const MagazinesContainerOne = (props) => {
=======
const TVNetworkContainerOne = (props) => {
>>>>>>> main:src/containers/tv-network/container-1/index.jsx
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
                    <span>OUR NETWORKS</span>
                </div>
            </div>
            <div className="brands-part">
                <BrandsContainer branddata={ourNetworks} />
            </div>
        </div>
    )
}

<<<<<<< HEAD:src/containers/tv-network/magazines/container-1/index.jsx
export default MagazinesContainerOne
=======
export default TVNetworkContainerOne
>>>>>>> main:src/containers/tv-network/container-1/index.jsx
