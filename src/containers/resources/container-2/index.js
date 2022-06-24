import React from 'react'
import GalleryFilterContainer from '../../common/galleryfiltercontainer';

const ResourcesContainerTwo = ({ data }) => {
    
    return (
        <>
        <div className='resources-container-2 section-with-padding white-background'>
            <div className="container">
                <GalleryFilterContainer data={data} />
            </div>
        </div>  
        </>
    )
}

export default ResourcesContainerTwo