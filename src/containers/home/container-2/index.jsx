import React from 'react'
import ImageOverImageCardContainer from '../../common/imageOverImageCardContainer';

<<<<<<< HEAD
const HomeContainerTwo = (props) => {
    
    return (
        <div className='section home-about-section white-background'>
            <ImageOverImageCardContainer containerData={props.data} />
        </div>
    )
=======
const HomeContainerTwo = ({ data }) => {
	return (
		<div className='home-container-2 section-with-padding white-background'>
			<div className="container">
				<FunfactColumnSpreadContainer
					columnsdata={data[0].cards}
				/>
			</div>
		</div>
	)
>>>>>>> main
}

export default HomeContainerTwo;