import React, { useEffect, useState } from 'react'
import ContinentSelectorComponent from '../../../components/continent-selector-component';
import useUserLocation from '../../../utils/useUserLocation'
import ContinentsData from '../../../data/continents.json'
import CountrySelectorComponent from '../../../components/country-selector-component';
import FilledButton from '../../../components/buttons/FilledButton';

const LocationSelectionContainer = ({ taglineblob }) => {

  const tagline = taglineblob && taglineblob['tagline'];
  const userLocation = useUserLocation();

  const [activeContinent, setActiveContinent] = useState({});

  useEffect(() => {
    setActiveContinent(userLocation)
  }, [userLocation])

  const onClickHandler = (event) => {
    const activecontinentid = event.target.id
    const activecontinentname = ContinentsData.find(continent => continent.iso === activecontinentid)['name']
    setActiveContinent({
      "continentcode": activecontinentid,
      "continentname": activecontinentname,
      "countrycode": null,
      "countryname": null
    })
  }

  return (
    <div className='location-selector-container section-with-padding noselect'>
      <div className="container">
        <div className="odd-divided-section">
          <div className="tagline-continent-selector-part">
            <div className="tagline-part">
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
                <FilledButton class={'black-button'} text={tagline.buttontext}/>
              </div>
            </div>
            <div className="continent-selector-part">
              <ContinentSelectorComponent 
                continentsdata={ContinentsData} 
                activeContinent={activeContinent} 
                setActiveContinent={onClickHandler} 
              />
            </div>
          </div>
          <div className="country-selector-part">
            <CountrySelectorComponent 
              activecontinent = {activeContinent}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSelectionContainer