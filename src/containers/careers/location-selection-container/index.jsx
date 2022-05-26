import React from 'react'
import ContinentSelectorComponent from '../../../components/continent-selector-component';
import useUserLocation from '../../../utils/useUserLocation'
import ContinentsData from '../../../data/continents.json'
import CountrySelectorComponent from '../../../components/country-selector-component';
import FilledButton from '../../../components/buttons/FilledButton';

const LocationSelectionContainer = ({ taglineblob }) => {

  useUserLocation();
  const tagline = taglineblob && taglineblob['tagline'];

  return (
    <div className='location-selector-container section-with-padding noselect'>
      <div className="container">
        <div className="odd-divided-section">
          <div className="tagline-continent-selector-part">
            <div 
              className="tagline-part"
              data-aos='fade-right'
              data-aos-duration='600'
              data-aos-delay='0'
            >
              <div className="subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: tagline.subtitle
                  }}
                />
              </div>
              <div className="content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: tagline.content
                  }}
                />
              </div>
              <div className="button-element">
                <FilledButton class={'black-button'} text={tagline.buttontext} />
              </div>
            </div>
            <div
              className="continent-selector-part"
              data-aos='fade-right'
              data-aos-duration='600'
              data-aos-delay='600'
            >
              <ContinentSelectorComponent continentsdata={ContinentsData} />
            </div>
          </div>
          <div
            className="country-selector-part"
            data-aos='fade-left'
            data-aos-duration='600'
            data-aos-delay='300'
          >
            <CountrySelectorComponent continentsdata={ContinentsData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSelectionContainer