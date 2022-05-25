import React from 'react'
import MapComponent from '../map-component'

const CountrySelectorComponent = ({ activecontinent }) => {

    return (
        <div className='country-selector-component'>
            <MapComponent activecontinent/>
        </div>
    )
}

export default CountrySelectorComponent