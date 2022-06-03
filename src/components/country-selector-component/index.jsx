import React from 'react';
import MapComponent from '../map-component';
import OfficeLocations from '../../data/office-locations.json'

const CountrySelectorComponent = ({continentsdata}) => {

    return (
        <div className='country-selector-component'>
            <MapComponent continentsdata={continentsdata} officelocations={OfficeLocations}/>
        </div>
    )
}

export default CountrySelectorComponent