import React from 'react'
import ImageOverSquareImageHeadingContainer from '../../common/image-over-square-image-heading'
import FilledButton from '../../../components/buttons/FilledButton';

const ResourcesContainerTwo = ({ data }) => {

    const headingdata = data[0].heading
    const imagedata = data[1].images
    const carddata = data[2].card

    const ButtonElement = <FilledButton class={'black-button'} text={carddata.buttontext} />

    return (
        <div className='resources-container-2 section-with-padding'>
            <ImageOverSquareImageHeadingContainer
                headertitle={headingdata.title}
                headersubtitle={headingdata.subtitle}
                headercontent={headingdata.content}
                bookishsubtitle={carddata.subtitle}
                bookishcontent={carddata.content}
                bookishButtonComponent={[ButtonElement]}
                imageBottom={imagedata.imageBottom}
                imageTop={imagedata.imageTop}
            />
        </div>
    )
}

export default ResourcesContainerTwo