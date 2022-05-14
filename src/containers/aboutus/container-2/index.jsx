import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton';
import ImageOverSquareImageHeadingContainer from '../../common/image-over-square-image-heading';

const AboutUsContainerTwo = ({ data }) => {
    const headingPart = data && data[0].heading;
    const imagePart = data && data[1].images;
    const bookishCardPart = data && data[2].card;

    const ButtonComponent = <FilledButton class={"black-button"} text={bookishCardPart.buttontext && "VIEW MORE"} />

    return (
        <div className='aboutus-container-2'>
            <ImageOverSquareImageHeadingContainer
                headertitle = {headingPart.title}
                headersubtitle = {headingPart.subtitle}
                headercontent = {headingPart.content}
                bookishsubtitle = {bookishCardPart.subtitle}
                bookishcontent = {bookishCardPart.content}
                bookishButtonComponent = {ButtonComponent}
                imageBottom = {imagePart.imageBottom}
                imageTop = {imagePart.imageTop}
            />
        </div>
    )
}

export default AboutUsContainerTwo