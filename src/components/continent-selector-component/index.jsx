import React from 'react'

const ContinentSelectorComponent = ({ continentsdata, activeContinent, setActiveContinent}) => {
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
                                className={continentdata.iso === activeContinent.continentcode ? 'continent active' : 'continent'}
                                onClick={setActiveContinent}
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