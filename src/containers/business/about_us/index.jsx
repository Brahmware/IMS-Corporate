import React from 'react';
import AboutAboutUs from "./AboutAboutUs"
import AboutIMSExplorers from "./AboutIMSExplorers"
import AboutOurMission from "./AboutOurMission"
import AboutWhatWeDo from "./AboutWhatWeDo"
import AboutConservedSpecies from "./AboutConservedSpecies";
import Data from "../../../data/about-data.json"

const AboutUs = () => {
    const aboutData = Data.about_us;
    // console.log(aboutData)
    return (
        <>
            <AboutWhatWeDo data={aboutData[0]}/>
            <AboutOurMission data={aboutData[1]}/>
            <AboutConservedSpecies data={aboutData[2]}/>
            <AboutAboutUs data={aboutData[3]}/>
            <AboutIMSExplorers />
        </>
    )
}

export default AboutUs