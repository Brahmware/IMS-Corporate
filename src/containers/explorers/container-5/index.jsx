import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const ExplorersContainerFive = ({ data }) => {
	let random_index = Math.floor(Math.random() * data.length);
	return (
		<div className='explorers-container-5 section'>
			<CardOverRibbonImageContainer cardribbondata={data[!random_index?0:random_index]} />
		</div>
	)
}

export default ExplorersContainerFive