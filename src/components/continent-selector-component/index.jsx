import React, { useState } from 'react'

const ContinentSelectorComponent = ({ continentsdata }) => {
    
    const [activeContinent, setActiveContinent] = useState(localStorage.getItem("continentcode"))
    
    const onClickHandler = (event) => {
        const activecontinentcode = event.target.id
        const activecontinentname = continentsdata.find(continent => continent.iso === activecontinentcode)['name']
        
        setActiveContinent(activecontinentcode)
        
        localStorage.setItem("continentcode", activecontinentcode)
        localStorage.setItem("continentname", activecontinentname)
        localStorage.setItem("countrycode", null)
        localStorage.setItem("countryname", null)
        window.dispatchEvent(new Event("continent-changed"));
    }

    return (
        <div className='continent-selector-component'>
            <div className="title">
                <span>JOB OPENINGS</span>
            </div>
            {
                continentsdata && continentsdata.map((continentdata, key) => {
                    return (
                        <React.Fragment key={key}>
                            <div className="divider" />
                            <div 
                                id={continentdata.iso} 
                                className={continentdata.iso === activeContinent ? 'continent active' : 'continent'}
                                onClick={onClickHandler}
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: continentdata.name
                                    }}
                                />
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default ContinentSelectorComponent