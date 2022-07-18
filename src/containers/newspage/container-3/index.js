import React from 'react'
import RecommendationCards from '../../../components/recommendation-cards'

const NewsPageContainerThree = ({ data }) => {
    return (
        <div className='newspage-container-3 bg-white'>
            <RecommendationCards data={data} />
        </div>
    )
}

export default NewsPageContainerThree