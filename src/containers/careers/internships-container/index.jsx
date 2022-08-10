import React, { useEffect, useState } from 'react'
import OpeningsCarouselContainer from '../../common/openings-carousel-container'

const InternshipsContainer = ({ data }) => {
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

   let [internshipsPresent, setInternshipsPresent] = useState(false);

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
       setInternshipsPresent(isThereAPosition)

   }, [ userCountry, userContinent, data ])

   return (
       <div className='section-with-padding white-background'>
           {
               internshipsPresent ?
               <div className="internships-container">
                   {
                       data.map((brand, key) => {
                           return (
                               <React.Fragment key={key}>
                                   <OpeningsCarouselContainer 
                                       data={brand} 
                                       title={"INTERNSHIP OPPORTUNITIES"}
                                       country={userCountry}
                                       continent={userContinent}
                                   />
                               </React.Fragment>
                           )
                       })
                   }
               </div> :
               <div className="container">
                   <div className="title pt-4 text-center">
                       <span>INTERNSHIP OPPORTUNITIES</span>
                   </div>
                   <div className="d-flex justify-content-center p-4">
                       <span>Sorry, there are no Internship opportunities on your selected location.</span>
                   </div>
               </div>
               
           }
       </div>
   )
}

export default InternshipsContainer