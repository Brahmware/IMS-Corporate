import React from 'react';
import AboutAboutUs from "./AboutAboutUs"
import AboutIMSExplorers from "./AboutIMSExplorers"
import AboutOurMission from "./AboutOurMission"
import AboutWhatWeDo from "./AboutWhatWeDo"
import AboutConservedSpecies from "./AboutConservedSpecies";
import Data from "../../../data/business.json"
import AboutImmersiveLearning from "./AboutImmersiveLearning"

const AboutUs = () => {
    const aboutData = Data.about_us;
    // console.log(aboutData)
    return (
        <>
            <AboutWhatWeDo data={aboutData[0]}/>
            <AboutOurMission data={aboutData[1]} />
            <AboutImmersiveLearning data={aboutData[2]}/>
            <AboutConservedSpecies data={aboutData[3]}/>
            <AboutAboutUs data={aboutData[4]}/>
            <AboutIMSExplorers data={aboutData[5]} />
        </>
    )
}

export default AboutUs