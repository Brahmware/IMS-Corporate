import React from 'react'
import MapComponent from '../map-component'

const CountrySelectorComponent = ({continentsdata}) => {

    return (
        <div className='country-selector-component'>
            <MapComponent continentsdata={continentsdata}/>
        </div>
    )
}

export default CountrySelectorComponent