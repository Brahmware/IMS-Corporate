import React from 'react'
import ImageOverSquareImageHeadingContainer from '../../common/image-over-square-image-heading'
import FilledButton from '../../../components/buttons/FilledButton';
import {Link} from "react-router-dom"

const DiversityInclusionContainerTwo = ({ data }) => {

    const headingdata = data[0].heading
    const imagedata = data[1].images
    const carddata = data[2].card

    const ButtonElement = <Link to={!carddata.path?"/":carddata.path}><FilledButton class={'black-button'} text={carddata.buttontext} /></Link>

    return (
        <div className='diversity-and-inclusion-container-2 section-with-padding'>
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

export default DiversityInclusionContainerTwo