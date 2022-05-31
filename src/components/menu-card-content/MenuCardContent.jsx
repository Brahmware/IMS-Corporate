import React from 'react'
import FilledButton from '../buttons/FilledButton';

const MenuCardContent = ({ card }) => {
    const image = card.image;
    const cardtitle = card.cardtitle;
    const cardcontent = card.cardcontentlist;
    return (
        <div
            data-aos='fade-left'
            data-aos-duration='600'
            data-aos-delay='300'
        >
            <div className="menu-card-content-image">
                <img src={image} alt={""} />
            </div>

            <div className='py-4 my-3 px-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='title menu-card-content-heading'>
                        <span
                            className='fs-5'
                            dangerouslySetInnerHTML={{
                                __html: cardtitle
                            }}
                        />
                    </div>
                    <FilledButton class={`join-button`} text={"JOIN"} />
                </div>
                <div className='ps-3 mt-4'>
                    <ul className="content">
                        {
                            cardcontent.map((cardcontent, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <li
                                            className='menu-card-content-list'
                                            dangerouslySetInnerHTML={{
                                                __html: cardcontent
                                            }}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuCardContent

