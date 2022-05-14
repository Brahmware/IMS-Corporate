import React from 'react'
import DIMission from './DIMission'
import DIWhatWeDo from './DIWhatWeDo'
import DIConservedSpecies from "./DIConservedSpecies"
import DIAboutUs from './DIAboutUs'
import DIExplorers from './DIExplorers'
import Data from "../../../data/business.json"
import DIImmersiveLearning from './DIImmersiveLearning'

const DiversityAndInclusion = () => {
    const diversityAndInclusion=Data.diversity_and_inclusion
    return (
        <>
            <DIWhatWeDo data={diversityAndInclusion[0] }/>
            <DIMission data={diversityAndInclusion[1]} />
            <DIImmersiveLearning data={diversityAndInclusion[2]} />
            <DIConservedSpecies data={diversityAndInclusion[3] }/>
            <DIAboutUs data={diversityAndInclusion[4] }/>
            <DIExplorers />

        </>
    )
}

export default DiversityAndInclusion