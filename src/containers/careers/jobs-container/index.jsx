import React, { useEffect, useState } from 'react'
import OpeningsCarouselContainer from '../../common/openings-carousel-container'

const JobsContainer = ({ data }) => {

    /* Choosing User Continent */
    const [userContinent, setUserContinent] = useState(localStorage.getItem("continentcode"));
    useEffect(() => {

        const checkUserData = () => {
            let currentContinent = localStorage.getItem("continentcode")
            setUserContinent(currentContinent)
            setUserCountry(null)
        }

        window.addEventListener('continent-changed', checkUserData)

        return () => {
            window.removeEventListener('continent-changed', checkUserData)
        }
    }, [userContinent])



    /* Choosing User Country */
    const [userCountry, setUserCountry] = useState(null);
    useEffect(() => {

        const checkUserData = () => {
            let currentCountry = localStorage.getItem("countrycode")
            setUserCountry(currentCountry)
        }

        window.addEventListener('country-changed', checkUserData)

        return () => {
            window.removeEventListener('country-changed', checkUserData)
        }
    }, [userCountry])

    let [jobsPresent, setJobsPresent] = useState(false);




    /* Selecting the opening Positions to show */
    useEffect(() => {

        let isThereAPosition = false;
        if (!userCountry) {
            data.forEach((brand, index) => {
                let positionList = brand.positions.filter(position => position.location.continent === userContinent)

                if (positionList.length > 0) {
                    isThereAPosition = true
                }
                data[index].filteredPositions = positionList
            });
        } else {
            data.forEach((brand, index) => {
                let positionList = brand.positions.filter(position => position.location.country === userCountry)
                if (positionList.length > 0) {
                    isThereAPosition = true
                }
                data[index].filteredPositions = positionList
            });
        }
        setJobsPresent(isThereAPosition)

    }, [userCountry, userContinent, data])

    return (
        <div className='section-with-padding white-background'>
            {
                jobsPresent ?
                    <div className="jobs-container">
                        {
                            data.map((brand, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <OpeningsCarouselContainer
                                            data={brand}
                                            title={"JOB OPENNINGS"}
                                            country={userCountry}
                                            continent={userContinent}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div> :
                    <div className="container">
                        <div 
                            className="title"
                            data-aos='fade-up'
                            data-aos-duration='600'
                            data-aos-delay='300'
                        >
                            <span>JOB OPENNINGS</span>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='600'
                                data-aos-delay='600'
                            >
                                <span>Sorry, there are no job openings on your selected location. Please try changing the location!</span>
                            </div>
                        </div>
                    </div>

            }
        </div>
    )
}

export default JobsContainer