import React from 'react'
import RemoteIconComponent from '../../../components/remoeiconcomponent';

const BrandsContainer = (props) => {
    const brands = props.branddata;
    return (
        <div
            className='container brands-container'
        >
            {
                brands && brands.map((eachBrand, key) => {
                    return (
                        <div
                            className="brand" key={key}
                            data-aos='fade-left'
                            data-aos-duration='600'
                            data-aos-delay={600 + 300 * key}
                        >
                            <RemoteIconComponent icon={eachBrand.logo} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BrandsContainer