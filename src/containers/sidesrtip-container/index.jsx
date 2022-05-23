import React, { useEffect } from 'react'
import BookishCard from '../../components/bookish-card'
import FilledButton from '../../components/buttons/FilledButton'
import DonationData from '../../data/donate.json'
import disableScroll from 'disable-scroll'

const SidestripContainer = ({ show, onclose, headerHeight }) => {

    const coverImage = DonationData && DonationData.find(datum => datum.id === 'cover-image');
    const cardData = DonationData && DonationData.find(datum => datum.id === 'card');
    const availableTypes = DonationData && DonationData.find(datum => datum.id === 'donation-types');

    useEffect(() => {
        show ? disableScroll.on() : disableScroll.off(); 
    }, [show])
    
    return (
        <div 
            className={show ? "sidestrip-container section open" : "sidestrip-container section"}
            style={{ 
                    height: `calc(100% - ${headerHeight}px)`,
                    top: headerHeight
                }}
        >
            <div className="other-part" onClick={onclose}/>
            <div className="sidestrip-wrapper noselect">
                <div className="cover-image">
                    <img src={coverImage.image} alt={coverImage.alt} />
                </div>
                <div className="content-part">
                    <BookishCard
                        title={cardData.data.title}
                        subtitle={cardData.data.subtitle}
                        content={cardData.data.content}
                    />
                    <div className="buttons-part">
                        {
                            availableTypes.types.map((eachType, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <FilledButton text={eachType.content} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidestripContainer